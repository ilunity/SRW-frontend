import { ReactNode } from 'react';

export interface SwipeableDrawerProps {
  title?: string;
  children: ReactNode;
  icon: ReactNode;
  disableInnerPadding?: boolean;
  updateCounter?: number;
}
