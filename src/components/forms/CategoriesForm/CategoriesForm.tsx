import React from 'react';
import { CategoriesFormProps } from './CategoriesForm.types';
import { Card, CardHeader, Stack } from '@mui/material';
import { clearCategories } from '@/redux/slices';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { ReloadBtn } from '@/components/icon-buttons/ReloadBtn';
import { Category } from '@/components/forms/CategoriesForm/Category';

export const CategoriesForm: React.FC<CategoriesFormProps> = ({ categories }) => {
  const selectedCategories = useSelector((state: RootState) => state.selectedCategories);
  const dispatch = useDispatch();

  const reloadCategories = () => {
    dispatch(clearCategories());
  };

  return (
    <Card sx={ { borderRadius: 3 } }>
      <CardHeader
        title={ 'Категории:' }
        action={ <ReloadBtn title={ 'Сбросить категории' } onClick={ reloadCategories } /> }
      />
      <Stack>
        { categories.map(category => (
          <Category
            key={ category.id }
            category={ category }
            allCategories={ categories }
            selectedCategories={ selectedCategories }
          />
        )) }
      </Stack>
    </Card>
  );
};
