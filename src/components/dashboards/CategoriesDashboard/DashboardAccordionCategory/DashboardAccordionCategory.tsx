import React from 'react';
import { DashboardAccordionCategoryProps } from './DashboardAccordionCategory.types';
import { Accordion, AccordionDetails, AccordionSummary, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DashboardCategoriesItem } from '@/components/dashboards/CategoriesDashboard/DashboardCategoryItem';
import { DashboardCategory } from '@/components/dashboards/CategoriesDashboard/DashboardCategory';

export const DashboardAccordionCategory: React.FC<DashboardAccordionCategoryProps> = ({ categories, updateCategories }) => {
  return (
    <Accordion
      key={ categories.id }
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
        <DashboardCategoriesItem category={ categories } updateCategories={ updateCategories } />
      </AccordionSummary>
      <Divider />
      <AccordionDetails
        sx={ {
          p: theme => theme.spacing(0, 0, 0, 4),
        } }
      >
        { categories.children.map(childCategory => (
          <DashboardCategory
            key={ childCategory.id }
            category={ childCategory }
            updateCategories={ updateCategories }
          />
        )) }
      </AccordionDetails>
    </Accordion>
  );
};
