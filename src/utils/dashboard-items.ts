import { ProductsDashboard } from 'src/components/dashboards/ProductsDashboard';
import { CategoriesDashboard } from 'src/components/dashboards/CategoriesDashboard';

export enum DASHBOARD_ITEMS_NAMES {
  PRODUCTS = 'PRODUCTS',
  CATEGORIES = 'CATEGORIES',
}

export const DASHBOARD_ITEMS: Record<string, React.FC> = {
  [DASHBOARD_ITEMS_NAMES.PRODUCTS]: ProductsDashboard,
  [DASHBOARD_ITEMS_NAMES.CATEGORIES]: CategoriesDashboard,
};
