import { DASHBOARD_ITEMS_NAMES } from '@/utils/dashboard-items';
import { Dispatch, SetStateAction } from 'react';

export interface DashboardDrawerProps {
  currentDashboardItem: DASHBOARD_ITEMS_NAMES;
  setCurrentDashboardItem: Dispatch<SetStateAction<DASHBOARD_ITEMS_NAMES>>;
  drawerWidth: number;
  swipeable: boolean;
}
