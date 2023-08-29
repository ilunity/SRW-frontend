import { CenterModalProps } from '@/components/layouts/CenterModal/CenterModal.types';
import { IProductData } from '@/api/interfaces/products.types';

export type UpdateProductModalProps = Pick<CenterModalProps, 'open' | 'onClose'> & {
  onSuccess: () => void;
  product: IProductData;
}
