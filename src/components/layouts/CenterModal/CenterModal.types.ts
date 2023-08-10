import { ReactNode } from 'react';

export interface CenterModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}
