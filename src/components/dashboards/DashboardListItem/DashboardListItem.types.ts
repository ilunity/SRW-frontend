import { ListItemIconProps } from '@mui/material';
import { DASHBOARD_ITEMS_NAMES } from '@/utils/dashboard-items';

export type DashboardListItemProps = Pick<ListItemIconProps, 'children'> & {
  selected: boolean;
  text: string;
  onClick: () => void;
}

export interface CertainDashboardListItemProps {
  selected: boolean;
  setCurrentDashboardItem: (itemName: DASHBOARD_ITEMS_NAMES) => void;
}
