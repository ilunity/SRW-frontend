import React, { useEffect } from 'react';
import { CategoryProps } from './Category.types';
import { Box } from '@mui/material';
import { addCategory, deleteCategory } from '@/redux/slices';
import { useDispatch } from 'react-redux';
import { CategoryCheckbox } from '@/components/forms/CategoriesForm/CategoryCheckbox';
import { checkIsIndeterminate, checkIsSelected, getSelectedChildrenCount } from '@/components/forms/CategoriesForm/utils';
import { TopLevelCategory } from '@/components/forms/CategoriesForm/TopLevelCategory';

export const Category: React.FC<CategoryProps> = (
  {
    category,
    allCategories,
    selectedCategories,
  }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    if (checkIsSelected(category, selectedCategories)) {
      return dispatch(deleteCategory({ categories: allCategories, categoryToDelete: category }));
    }

    dispatch(addCategory(category));
  };

  useEffect(() => {
    const selectedChildrenCount = getSelectedChildrenCount(category, selectedCategories);
    const isAllChildrenSelected = selectedChildrenCount === category.children.length;
    const isSelected = checkIsSelected(category, selectedCategories);

    if (!isSelected && isAllChildrenSelected) {
      dispatch(addCategory(category));
    }
  }, [selectedCategories]);


  if (category.level === 0) {
    return (
      <TopLevelCategory
        category={ category }
        allCategories={ allCategories }
        selectedCategories={ selectedCategories }
        onChange={ handleChange }
      />
    );
  }

  return (
    <>
      <CategoryCheckbox
        label={ category.name }
        level={ category.level }
        isSelected={ checkIsSelected(category, selectedCategories) }
        isIndeterminate={ checkIsIndeterminate(category, selectedCategories) }
        onChange={ handleChange }
      />
      <Box sx={ { my: 1 } }>
        { category.children.map(childCategory => (
          <Category
            key={ childCategory.id }
            category={ childCategory }
            allCategories={ allCategories }
            selectedCategories={ selectedCategories }
          />
        )) }
      </Box>
    </>
  );
};
