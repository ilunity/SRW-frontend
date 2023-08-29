import { ButtonProps } from '@mui/material';

export type LinkButtonProps = Pick<ButtonProps, 'color'> & {
  href: string;
  children: string;
}
