import React, { useState } from 'react';
import { DashboardFilterItemProps } from './DashboardFilterItem.types';
import { Stack, Typography } from '@mui/material';
import { AddChildBtn } from 'src/components/icon-buttons/AddChildBtn';
import { CreateFilterModal } from '@/components/dashboards/FiltersDashboard/CreateFilterModal';
import { EditBtn } from '@/components/icon-buttons/EditBtn';
import { UpdateFilterModal } from '@/components/dashboards/FiltersDashboard/UpdateFilterModal';

export const DashboardFilterItem: React.FC<DashboardFilterItemProps> = ({ filter, updateFilters }) => {
  const [openCreateProductForm, setOpenCreateFilterForm] = useState<boolean>(false);
  const [openUpdateProductForm, setOpenUpdateFilterForm] = useState<boolean>(false);

  return (
    <>
      <CreateFilterModal
        open={ openCreateProductForm }
        onClose={ () => setOpenCreateFilterForm(false) }
        onSuccess={ updateFilters }
        parent={ filter }
      />
      <UpdateFilterModal
        open={ openUpdateProductForm }
        onClose={ () => setOpenUpdateFilterForm(false) }
        onSuccess={ updateFilters }
        filter={ filter }
      />
      <Stack
        direction={ 'row' }
        alignItems={ 'center' }
        sx={ { width: '100%' } }
      >
        <AddChildBtn
          title={ 'Добавить дочерний фильтр' }
          onClick={ (event) => {
            event.stopPropagation();
            setOpenCreateFilterForm(true);
          } }
          size={ 'small' }
        />
        <EditBtn
          title={ 'Изменить фильтр' }
          onClick={ (event) => {
            event.stopPropagation();
            setOpenUpdateFilterForm(true);
          } }
          size={ 'small' }
        />
        <Typography variant={ 'subtitle1' }>{ filter.name }</Typography>
      </Stack>
    </>
  );
};
