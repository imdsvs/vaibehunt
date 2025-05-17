import React, { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '../lib/supabase';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 10000; // 10 seconds in milliseconds
const MAX_ATTEMPTS = 2;

// Rate limiting state
const emailAttempts = new Map<string, { count: number; timestamp: number }>();

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const checkRateLimit = (email: string): boolean => {
    const now = Date.now();
    const attempts = emailAttempts.get(email);

    if (!attempts) {
      emailAttempts.set(email, { count: 1, timestamp: now });
      return true;
    }

    // Check if we're still within the rate limit window
    if (now - attempts.timestamp < RATE_LIMIT_WINDOW) {
      if (attempts.count >= MAX_ATTEMPTS) {
        const remainingTime = Math.ceil((RATE_LIMIT_WINDOW - (now - attempts.timestamp)) / 1000);
        toast.error(`Too many attempts. Please try again in ${remainingTime} seconds.`);
        return false;
      }
      // Increment attempt count
      emailAttempts.set(email, { count: attempts.count + 1, timestamp: attempts.timestamp });
    } else {
      // Reset if outside window
      emailAttempts.set(email, { count: 1, timestamp: now });
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkRateLimit(email)) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if email already exists
      const { data: existingUser, error: selectError } = await supabase
        .from('waitlist')
        .select('*')
        .eq('email', email)
        .limit(1);

      if (selectError) {
        console.error('Error checking existing user:', selectError);
        toast.error('Error checking if email exists. Please try again.');
        return;
      }

      if (existingUser && existingUser.length > 0) {
        toast.error('You are already on the waitlist!');
        return;
      }

      // Add new email to waitlist
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) throw error;

      toast.success('Successfully joined the waitlist!');
      setEmail('');
      onClose();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4">Join the Waitlist</h2>
        <p className="text-gray-600 mb-6">
          Be the first to know when v[AI]behunt launches. Get early access to the premier AI-built project showcase platform.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WaitlistModal;