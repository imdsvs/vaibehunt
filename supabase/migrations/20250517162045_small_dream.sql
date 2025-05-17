/*
  # Create waitlist table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for inserting new emails
    - Add policy for checking existing emails
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert new emails
CREATE POLICY "Anyone can add their email to waitlist"
  ON waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow checking for existing emails
CREATE POLICY "Anyone can check if email exists"
  ON waitlist
  FOR SELECT
  TO public
  USING (true);