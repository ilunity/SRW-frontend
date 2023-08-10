import { Dispatch, SetStateAction } from 'react';
import { AlertColor, SnackbarOrigin } from '@mui/material';

export interface AlertSnackbarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  severity?: AlertColor;
  content?: string | string[];
  anchorOrigin?: SnackbarOrigin | undefined;
  autoHideDuration?: number | null;
}
