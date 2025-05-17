export interface Project {
  id: number;
  title: string;
  tagline: string;
  upvotes: number;
  toolstack: string[];
  imageUrl: string;
}

export interface WaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
}