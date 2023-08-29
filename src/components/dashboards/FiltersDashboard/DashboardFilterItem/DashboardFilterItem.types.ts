import { IFiltersData } from '@/api/interfaces/filters.types';

export interface DashboardFilterItemProps {
  filter: IFiltersData;
  updateFilters: () => void;
}
