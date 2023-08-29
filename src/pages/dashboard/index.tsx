import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { USER_ROLE } from '@/utils/types';
import { Box, Divider, Drawer, List, Toolbar } from '@mui/material';
import { DASHBOARD_ITEMS, DASHBOARD_ITEMS_NAMES } from '@/utils/dashboard-items';
import { ProductsDashboardListItem } from '@/components/dashboards/ProductsDashboard/ProductsDashboardListItem';
import { FiltersDashboardListItem } from '@/components/dashboards/FiltersDashboard/FiltersDashboardListItem';

const DRAWER_WIDTH = 240;

export default function Dashboard() {
  const [currentDashboardItem, setCurrentDashboardItem] = useState<DASHBOARD_ITEMS_NAMES>(DASHBOARD_ITEMS_NAMES.PRODUCTS);

  const user = useSelector((state: RootState) => state.user.payload);
  const router = useRouter();


  useEffect(() => {
    if (user?.role !== USER_ROLE.ADMIN) {
      router.push('login');
    }
  }, [user]);

  if (user?.role !== USER_ROLE.ADMIN) {
    return <></>;
  }

  const DashboardItem = DASHBOARD_ITEMS[currentDashboardItem];

  return (
    <>
      <Drawer
        variant={ 'permanent' }
        sx={ {
          width: DRAWER_WIDTH,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: DRAWER_WIDTH, boxSizing: 'border-box' },
        } }
      >
        <Toolbar />
        <Box sx={ { overflow: 'auto' } }>
          <List component='nav'>
            <ProductsDashboardListItem
              selected={ currentDashboardItem === DASHBOARD_ITEMS_NAMES.PRODUCTS }
              setCurrentDashboardItem={ setCurrentDashboardItem }
            />
            <FiltersDashboardListItem
              selected={ currentDashboardItem === DASHBOARD_ITEMS_NAMES.FILTERS }
              setCurrentDashboardItem={ setCurrentDashboardItem }
            />
            <Divider sx={ { my: 1 } } />
          </List>
        </Box>
      </Drawer>
      <Box sx={ { pl: `${ DRAWER_WIDTH }px` } }>
        { <DashboardItem /> }
      </Box>
    </>
  );
}
