import { CenterModalProps } from '@/components/layouts/CenterModal/CenterModal.types';
import { IFiltersData } from '@/api/interfaces/filters.types';

export type UpdateFilterModalProps =
  Pick<CenterModalProps, 'open' | 'onClose'> & {
  onSuccess: () => void;
  filter: IFiltersData;
}
