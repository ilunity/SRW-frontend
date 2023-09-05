import { LabelLayoutProps } from '@/components/labels/LabelLayout/LabelLayout.types';

export type TimeLabelProps = Pick<LabelLayoutProps, 'size'> & {
  time: number;
}
