import { ReactNode } from 'react';

export interface IconButtonLayoutProps {
  title: string;
  onClick: () => void;
  children: ReactNode;
}
