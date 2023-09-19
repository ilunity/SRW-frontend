import { CenterModalProps } from '@/components/layouts/CenterModal/CenterModal.types';
import { ICategory } from '@/api/interfaces/categories.types';

export type CreateCategoryModalProps =
  Pick<CenterModalProps, 'open' | 'onClose'> & {
  onSuccess: () => void;
  parent?: ICategory;
}
