import React from 'react';
import { DashboardListItem } from 'src/components/dashboards/DashboardListItem';
import { DASHBOARD_ITEMS_NAMES } from '@/utils/dashboard-items';
import FilterIcon from '@mui/icons-material/FilterAlt';
import { CertainDashboardListItemProps } from '@/components/dashboards/DashboardListItem/DashboardListItem.types';

export const FiltersDashboardListItem: React.FC<CertainDashboardListItemProps> = ({ selected, setCurrentDashboardItem }) => {
  return (
    <DashboardListItem
      selected={ selected }
      text={ 'Фильтры' }
      onClick={ () => setCurrentDashboardItem(DASHBOARD_ITEMS_NAMES.FILTERS) }
    >
      <FilterIcon />
    </DashboardListItem>
  );
};
