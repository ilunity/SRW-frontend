import React from 'react';
import { DashboardCategoryProps } from './DashboardCategory.types';
import { Box } from '@mui/material';
import { DashboardCategoriesItem } from '@/components/dashboards/CategoriesDashboard/DashboardCategoryItem';
import { DashboardAccordionCategory } from '@/components/dashboards/CategoriesDashboard/DashboardAccordionCategory';

export const DashboardCategory: React.FC<DashboardCategoryProps> = ({ category, updateCategories }) => {
  if (category.children.length > 0) {
    return (
      <DashboardAccordionCategory categories={ category } updateCategories={ updateCategories } />
    );
  }

  return (
    <Box>
      <DashboardCategoriesItem category={ category } updateCategories={ updateCategories } />
      { category.children.map(childCategory => (
        <DashboardCategory
          key={ childCategory.id }
          category={ childCategory }
          updateCategories={ updateCategories }
        />
      )) }
    </Box>
  );
};
