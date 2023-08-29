import { IFiltersData } from '@/api/interfaces/filters.types';

export interface DashboardAccordionFilterProps {
  filter: IFiltersData;
  updateProducts: () => void;
}
