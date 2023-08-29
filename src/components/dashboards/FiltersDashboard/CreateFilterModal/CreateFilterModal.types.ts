import { CenterModalProps } from '@/components/layouts/CenterModal/CenterModal.types';
import { IFiltersData } from '@/api/interfaces/filters.types';

export type CreateFilterModalProps =
  Pick<CenterModalProps, 'open' | 'onClose'> & {
  onSuccess: () => void;
  parent?: IFiltersData;
}
