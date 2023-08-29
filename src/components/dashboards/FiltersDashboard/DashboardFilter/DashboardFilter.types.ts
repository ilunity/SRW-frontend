import { IFiltersData } from '@/api/interfaces/filters.types';

export interface DashboardFilterProps {
  filter: IFiltersData;
  updateFilters: () => void;
}
