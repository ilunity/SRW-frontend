import { ReactNode } from 'react';

export interface CenterModalProps {
  title: string,
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}
