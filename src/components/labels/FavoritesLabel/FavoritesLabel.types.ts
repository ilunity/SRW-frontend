import { LabelLayoutProps } from '@/components/labels/LabelLayout/LabelLayout.types';

export type FavoritesLabelProps = Pick<LabelLayoutProps, 'size'> & {
  count: string;
}
