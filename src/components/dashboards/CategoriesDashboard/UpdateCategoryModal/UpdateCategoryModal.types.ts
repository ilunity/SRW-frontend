import { CenterModalProps } from '@/components/layouts/CenterModal/CenterModal.types';
import { ICategory } from '@/api/interfaces/categories.types';

export type UpdateCategoryModalProps =
  Pick<CenterModalProps, 'open' | 'onClose'> & {
  onSuccess: () => void;
  category: ICategory;
}
