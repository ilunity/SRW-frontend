import { LabelLayoutProps } from '@/components/labels/LabelLayout/LabelLayout.types';

export type RatingLabelProps = Pick<LabelLayoutProps, 'size'> & {
  value: number;
  expanded?: boolean;
}
