import { CenterModalProps } from '@/components/layouts/CenterModal/CenterModal.types';

export type CreateProductModalProps =
  Pick<CenterModalProps, 'open' | 'onClose'> & {
  onSuccess: () => void;
}
