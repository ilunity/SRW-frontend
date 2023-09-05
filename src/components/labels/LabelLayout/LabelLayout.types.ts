import { IconProps, SvgIconProps } from '@mui/material';

export interface LabelLayoutProps {
  size?: IconProps['fontSize'];
  color?: IconProps['color'];
  text: string;
  icon: SvgIconProps['children'];
}
