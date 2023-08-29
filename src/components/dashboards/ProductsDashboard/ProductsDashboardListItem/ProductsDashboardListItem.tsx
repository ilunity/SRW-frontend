import React from 'react';
import { DashboardListItem } from 'src/components/dashboards/DashboardListItem';
import { DASHBOARD_ITEMS_NAMES } from '@/utils/dashboard-items';
import FridgeIcon from '@mui/icons-material/Kitchen';
import { CertainDashboardListItemProps } from '@/components/dashboards/DashboardListItem/DashboardListItem.types';

export const ProductsDashboardListItem: React.FC<CertainDashboardListItemProps> = ({ selected, setCurrentDashboardItem }) => {
  return (
    <DashboardListItem
      selected={ selected }
      text={ 'Продукты' }
      onClick={ () => setCurrentDashboardItem(DASHBOARD_ITEMS_NAMES.PRODUCTS) }
    >
      <FridgeIcon />
    </DashboardListItem>
  );
};
