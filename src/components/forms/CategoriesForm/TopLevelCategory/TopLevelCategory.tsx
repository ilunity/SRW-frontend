import React from 'react';
import { TopLevelCategoryProps } from './TopLevelCategory.types';
import { Accordion, AccordionDetails, AccordionSummary, Divider } from '@mui/material';
import { CategoryCheckbox } from '@/components/forms/CategoriesForm/CategoryCheckbox';
import { Category } from '@/components/forms/CategoriesForm/Category';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { checkIsIndeterminate, checkIsSelected } from '@/components/forms/CategoriesForm/utils';

export const TopLevelCategory: React.FC<TopLevelCategoryProps> = (
  {
    category,
    allCategories,
    selectedCategories,
    onChange,
  }) => {
  const isSelected = checkIsSelected(category, selectedCategories);
  const isIndeterminate = checkIsIndeterminate(category, selectedCategories);

  return (
    <Accordion key={ category.id } disableGutters>
      <AccordionSummary
        sx={ { '& .MuiAccordionSummary-content': { m: 0 } } }
        expandIcon={ <ExpandMoreIcon /> }
      >
        <CategoryCheckbox
          label={ category.name }
          level={ category.level }
          isSelected={ isSelected }
          isIndeterminate={ isIndeterminate }
          onChange={ onChange }
        />
      </AccordionSummary>
      <Divider />
      <AccordionDetails sx={ { p: 1 } }>
        { category.children.map(childCategory => (
          <Category
            key={ childCategory.id }
            category={ childCategory }
            selectedCategories={ selectedCategories }
            allCategories={ allCategories }
          />
        )) }
      </AccordionDetails>
    </Accordion>
  );
};
