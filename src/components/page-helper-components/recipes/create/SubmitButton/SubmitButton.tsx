import React from 'react';
import { SubmitButtonProps } from './SubmitButton.types';
import Button from '@mui/material/Button';
import { clearCreatedRecipe, clearFilters, CreatedRecipeState } from '@/redux/slices';
import { CreateRecipeDto } from '@/api/interfaces/recipes.types';
import { executeRequest } from '@/api/utils';
import { recipesService } from '@/api/services';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export const SubmitButton: React.FC<SubmitButtonProps> = () => {
  const createdRecipe = useSelector((state: RootState) => state.createdRecipe);
  const selectedFilters = useSelector((state: RootState) => state.selectedFilters);
  const dispatch = useDispatch();

  const createRecipe = async () => {
    // todo create recipe validation

    const { description, ingredients, steps }: CreatedRecipeState = createdRecipe;

    if (description === null) {
      return;
    }

    const createRecipeDto: CreateRecipeDto = {
      description: description,
      ingredients: ingredients.map(({ id, ...rest }) => ({ product_id: id, ...rest })),
      steps,
      filters: selectedFilters.map(filter => ({ filter_id: filter.id })),
    };

    await executeRequest(() => recipesService.create(createRecipeDto));
    dispatch(clearCreatedRecipe());
    dispatch(clearFilters());
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
