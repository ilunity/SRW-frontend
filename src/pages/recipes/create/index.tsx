import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Stack } from '@mui/material';
import { IngredientsForm } from '@/components/forms/IngredientsForm';
import { StepsForm } from '@/components/forms/StepsForm';
import { DescriptionForm } from '@/components/forms/DescriptionForm';
import { FiltersForm } from '@/components/forms/FiltersForm';
import { GetStaticProps } from 'next';
import { IFiltersData } from '@/api/interfaces/filters.types';
import { executeRequest } from '@/api/utils';
import { filtersService } from '@/api/services';
import Button from '@mui/material/Button';
import { CreateRecipeDto } from '@/api/interfaces/recipes.types';
import { recipesService } from '@/api/services/recipes.service';
import { clearCreatedRecipe, clearFilters, CreatedRecipeState } from '@/redux/slices';


export default function CreateRecipe({ filters }: { filters: IFiltersData[] }) {
  const user = useSelector((state: RootState) => state.user.payload);
  const createdRecipe = useSelector((state: RootState) => state.createdRecipe);
  const selectedFilters = useSelector((state: RootState) => state.selectedFilters);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user]);

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
    <Stack spacing={ 8 }>
      <Stack
        direction={ 'row' }
        spacing={ 8 }
        sx={ {
          justifyContent: 'space-between',
          alignItems: 'start',
        } }
      >
        <Stack spacing={ 8 }>
          <DescriptionForm />
          <StepsForm />
        </Stack>
        <Stack spacing={ 8 }>
          <IngredientsForm />
          <FiltersForm filters={ filters } />
        </Stack>
      </Stack>
      <Button
        variant={ 'contained' }
        onClick={ createRecipe }
      >
        Отправить
      </Button>
    </Stack>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: filters } = await executeRequest(filtersService.get);

  return {
    props: {
      filters,
    },
  };
};
