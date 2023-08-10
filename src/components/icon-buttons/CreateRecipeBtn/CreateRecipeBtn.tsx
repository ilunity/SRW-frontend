import React from 'react';
import { useRouter } from 'next/router';
import { AddBtn } from '@/components/icon-buttons/AddBtn';

export const CreateRecipeBtn: React.FC = () => {
  const router = useRouter();

  const toCreateRecipe = () => {
    router.push('/recipes/create');
  };

  return (
    <AddBtn title={ 'Создать рецепт' } onClick={ toCreateRecipe } />
  );
};
