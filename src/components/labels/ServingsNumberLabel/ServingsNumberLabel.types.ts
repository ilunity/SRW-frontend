import { LabelLayoutProps } from '@/components/labels/LabelLayout/LabelLayout.types';

export type ServingsNumberLabelProps = Pick<LabelLayoutProps, 'size'> & {
  servingsNumber: number;
}
