import React from 'react';
import { DashboardFilterProps } from './DashboardFilter.types';
import { Box } from '@mui/material';
import { DashboardFilterItem } from '@/components/dashboards/FiltersDashboard/DashboardFilterItem';
import { DashboardAccordionFilter } from '@/components/dashboards/FiltersDashboard/DashboardAccordionFilter';

export const DashboardFilter: React.FC<DashboardFilterProps> = ({ filter, updateFilters }) => {
  if (filter.children.length > 0) {
    return (
      <DashboardAccordionFilter filter={ filter } updateProducts={ updateFilters } />
    );
  }

  return (
    <Box>
      <DashboardFilterItem filter={ filter } updateFilters={ updateFilters } />
      { filter.children.map(childFilter => (
        <DashboardFilter
          key={ childFilter.id }
          filter={ childFilter }
          updateFilters={ updateFilters }
        />
      )) }
    </Box>
  );
};
