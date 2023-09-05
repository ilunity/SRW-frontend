import React from 'react';
import { FiltersFormProps } from './FiltersForm.types';
import { Card, CardHeader, Stack } from '@mui/material';
import { clearFilters } from '@/redux/slices';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { ReloadBtn } from '@/components/icon-buttons/ReloadBtn';
import { Filter } from '@/components/forms/FiltersForm/Filter';

export const FiltersForm: React.FC<FiltersFormProps> = ({ filters }) => {
  const selectedFilters = useSelector((state: RootState) => state.selectedFilters);
  const dispatch = useDispatch();

  const reloadFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <Card sx={ { borderRadius: 3 } }>
      <CardHeader
        title={ 'Категории:' }
        action={ <ReloadBtn title={ 'Сбросить фильтры' } onClick={ reloadFilters } /> }
      />
      <Stack>
        { filters.map(filter => (
          <Filter
            key={ filter.id }
            filter={ filter }
            allFilters={ filters }
            selectedFilters={ selectedFilters }
          />
        )) }
      </Stack>
    </Card>
  );
};
