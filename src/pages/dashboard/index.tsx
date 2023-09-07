import { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { DASHBOARD_ITEMS, DASHBOARD_ITEMS_NAMES } from '@/utils/dashboard-items';
import { DashboardDrawer } from '@/components/drawers/DashboardDrawer';
import { Theme } from '@mui/system';
import { LayoutConstructor } from '@/utils/layout-constructor';

const DRAWER_WIDTH = 240;

export default function Dashboard() {
  const [currentDashboardItem, setCurrentDashboardItem] = useState<DASHBOARD_ITEMS_NAMES>(DASHBOARD_ITEMS_NAMES.PRODUCTS);
  const mediaQueryMd = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const DashboardItem = DASHBOARD_ITEMS[currentDashboardItem];

  return (
    <>
      <DashboardDrawer
        drawerWidth={ DRAWER_WIDTH }
        currentDashboardItem={ currentDashboardItem }
        setCurrentDashboardItem={ setCurrentDashboardItem }
        swipeable={ !mediaQueryMd }
      />
      <Box
        sx={ {
          pl: mediaQueryMd ? `${ DRAWER_WIDTH }px` : 0,
        } }
      >
        { <DashboardItem /> }
      </Box>
    </>
  );
}

Dashboard.layout = new LayoutConstructor().standard().checkUserExists();
