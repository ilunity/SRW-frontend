import { ReactNode } from 'react';
import { SxProps, Theme } from '@mui/system';

export interface RowContainerProps {
  children: ReactNode;
  sx?: SxProps<Theme> | undefined;
}
