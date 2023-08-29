import React from 'react';
import { DashboardAccordionFilterProps } from './DashboardAccordionFilter.types';
import { Accordion, AccordionDetails, AccordionSummary, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DashboardFilterItem } from '@/components/dashboards/FiltersDashboard/DashboardFilterItem';
import { DashboardFilter } from '@/components/dashboards/FiltersDashboard/DashboardFilter';

export const DashboardAccordionFilter: React.FC<DashboardAccordionFilterProps> = ({ filter, updateProducts }) => {
  return (
    <Accordion
      key={ filter.id }
      disableGutters
      sx={ {
        '&::before': { height: 0 },
        background: 'inherit',
      } }
      square
      elevation={ 0 }
    >
      <AccordionSummary
        sx={ {
          '& .MuiAccordionSummary-content': { m: 0 },
          p: theme => theme.spacing(0, 3, 0, 0),
          minHeight: 0,
        } }
        expandIcon={ <ExpandMoreIcon /> }
      >
        <DashboardFilterItem filter={ filter } updateFilters={ updateProducts } />
      </AccordionSummary>
      <Divider />
      <AccordionDetails
        sx={ {
          p: theme => theme.spacing(0, 0, 0, 4),
        } }
      >
        { filter.children.map(childFilter => (
          <DashboardFilter
            key={ childFilter.id }
            filter={ childFilter }
            updateFilters={ updateProducts }
          />
        )) }
      </AccordionDetails>
    </Accordion>
  );
};
