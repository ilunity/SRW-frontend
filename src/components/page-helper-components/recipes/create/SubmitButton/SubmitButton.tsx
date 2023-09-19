import React from 'react';
import Button from '@mui/material/Button';
import { clearCategories, clearCreatedRecipe, CreatedRecipeState } from '@/redux/slices';
import { CreateRecipeDto } from '@/api/interfaces/recipes.types';
import { executeRequest } from '@/api/utils';
import { recipesService } from '@/api/services';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export const SubmitButton: React.FC = () => {
  const createdRecipe = useSelector((state: RootState) => state.createdRecipe);
  const selectedCategories = useSelector((state: RootState) => state.selectedCategories);
  const dispatch = useDispatch();

  const createRecipe = async () => {
    const { description, ingredients, steps }: CreatedRecipeState = createdRecipe;

    if (description === null) {
      return;
    }

    const createRecipeDto: CreateRecipeDto = {
      ...description,
      ingredients: ingredients.map(({ id, ...rest }) => ({ product_id: id, ...rest })),
      steps,
      categories: selectedCategories.map(({ id }) => id),
    };

    await executeRequest(() => recipesService.create(createRecipeDto));
    dispatch(clearCreatedRecipe());
    dispatch(clearCategories());
  };


  return (
    <Button
      variant={ 'contained' }
      onClick={ createRecipe }
      sx={ {
        width: {
          xs: '100%',
          sm: 300,
        },
      } }
    >
      Отправить
    </Button>
  );
};
