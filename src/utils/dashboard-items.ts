import { ProductsDashboard } from 'src/components/dashboards/ProductsDashboard';
import { FiltersDashboard } from '@/components/dashboards/FiltersDashboard';

export enum DASHBOARD_ITEMS_NAMES {
  PRODUCTS = 'PRODUCTS',
  FILTERS = 'FILTERS',
}

export const DASHBOARD_ITEMS: Record<string, React.FC> = {
  [DASHBOARD_ITEMS_NAMES.PRODUCTS]: ProductsDashboard,
  [DASHBOARD_ITEMS_NAMES.FILTERS]: FiltersDashboard,
};
