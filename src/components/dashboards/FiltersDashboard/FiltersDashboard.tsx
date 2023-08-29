import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Stack } from '@mui/material';
import { useApiRequest } from '@/api/utils';
import { filtersService } from '@/api/services';
import { DashboardFilter } from '@/components/dashboards/FiltersDashboard/DashboardFilter';
import { AddBtn } from '@/components/icon-buttons/AddBtn';
import { CreateFilterModal } from '@/components/dashboards/FiltersDashboard/CreateFilterModal';

export const FiltersDashboard: React.FC = () => {
  const [updateFiltersCounter, setUpdateFiltersCounter] = useState<number>(0);
  const [openCreateFilterForm, setOpenCreateFilterForm] = useState<boolean>(false);

  const { data: filters } = useApiRequest(filtersService.get, [updateFiltersCounter]);

  const updateFilters = () => setUpdateFiltersCounter(prevState => prevState + 1);

  return (
    <>
      <CreateFilterModal
        open={ openCreateFilterForm }
        onClose={ () => setOpenCreateFilterForm(false) }
        onSuccess={ updateFilters }
      />
      <Stack spacing={ 8 }>
        { filters &&
          <Card
            sx={ {
              borderRadius: 3,
              width: 850,
            } }
          >
            <CardHeader
              title={ `Фильтры:` }
              action={
                <AddBtn
                  title={ 'Добавить фильтр' }
                  onClick={ () => setOpenCreateFilterForm(true) }
                />
              }
            />
            <CardContent>
              <Stack>
                { filters.map(filter => (
                  <DashboardFilter
                    key={ filter.id }
                    filter={ filter }
                    updateFilters={ updateFilters }
                  />
                )) }
              </Stack>
            </CardContent>
          </Card>
        }
      </Stack>
    </>
  );
};
