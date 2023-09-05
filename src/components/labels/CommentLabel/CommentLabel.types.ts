import { LabelLayoutProps } from '@/components/labels/LabelLayout/LabelLayout.types';

export type CommentLabelProps = Pick<LabelLayoutProps, 'size'> & {
  value: string;
}
