import React, { useState } from 'react';
import { DashboardDrawerProps } from './DashboardDrawer.types';
import { Divider, List } from '@mui/material';
import { ProductsDashboardListItem } from '@/components/dashboards/ProductsDashboard/ProductsDashboardListItem';
import { DASHBOARD_ITEMS_NAMES } from '@/utils/dashboard-items';
import { FiltersDashboardListItem } from '@/components/dashboards/FiltersDashboard/FiltersDashboardListItem';
import { SwipeableDrawer } from '@/components/drawers/SwipeableDrawer';
import { PermanentDrawer } from '@/components/drawers/DashboardDrawer/PermanentDrawer';
import MenuIcon from '@mui/icons-material/Menu';

export const DashboardDrawer: React.FC<DashboardDrawerProps> = (
  {
    currentDashboardItem,
    setCurrentDashboardItem,
    drawerWidth,
    swipeable,
  }) => {
  const [updateCounter, setUpdateCounter] = useState<number>(0);

  const setDashboardItem = (dashboardName: DASHBOARD_ITEMS_NAMES) => {
    setCurrentDashboardItem(dashboardName);
    setUpdateCounter(prevState => prevState + 1);
  };

  const navList = (
    <List component='nav'>
      <ProductsDashboardListItem
        selected={ currentDashboardItem === DASHBOARD_ITEMS_NAMES.PRODUCTS }
        setCurrentDashboardItem={ setDashboardItem }
      />
      <FiltersDashboardListItem
        selected={ currentDashboardItem === DASHBOARD_ITEMS_NAMES.FILTERS }
        setCurrentDashboardItem={ setDashboardItem }
      />
      <Divider sx={ { my: 1 } } />
    </List>
  );

  if (swipeable) {
    return (
      <SwipeableDrawer
        icon={ <MenuIcon /> }
        disableInnerPadding
        updateCounter={ updateCounter }
      >
        { navList }
      </SwipeableDrawer>
    );
  }

  return (
    <PermanentDrawer drawerWidth={ drawerWidth }>
      { navList }
    </PermanentDrawer>
  );
};
