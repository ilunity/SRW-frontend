import { IconButtonProps } from '@mui/material';
import { SxProps } from '@mui/system';

export type IconButtonLayoutProps = Pick<IconButtonProps, 'size' | 'title' | 'children' | 'onClick'> & {
  wrapperSx?: SxProps;
};
