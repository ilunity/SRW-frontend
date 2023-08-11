import { Box, Stack, Typography } from '@mui/material';
import { GetServerSideProps } from 'next';
import { IRecipeData, IRecipePreview } from '@/utils/types';
import { RecipeCard } from '@/components/RecipeCard';
import { FiltersForm } from 'src/components/forms/FiltersForm';
import { executeRequest } from '@/api/utils';
import { filtersService } from '@/api/services';
import { FiltersKeys, IFiltersData } from '@/api/interfaces/filters.types';
import { recipesService } from '@/api/services/recipes.service';
import { isString } from 'next/dist/build/webpack/plugins/jsconfig-paths-plugin';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useDebounce } from 'use-debounce';
import { useEffect } from 'react';


export default function Recipes({ recipes, filters }: {
  recipes: IRecipePreview[],
  filters: IFiltersData[],
}) {
  const router = useRouter();

  const selectedFilters = useSelector((state: RootState) => state.selectedFilters);
  const [selectedFiltersDebounced] = useDebounce(selectedFilters, 2000);

  useEffect(() => {
    if (selectedFiltersDebounced.length === 0) {
      router.push({
        href: '/',
      });
    } else {
      const filters_keys = selectedFiltersDebounced.map(({ left_key, right_key }) => ({
        left: left_key,
        right: right_key,
      }));
      router.query.filters_keys = JSON.stringify(filters_keys);
      router.push(router);
    }
  }, [selectedFiltersDebounced]);

  return (
    <Box>
      <Stack spacing={ 4 }>
        <Stack
          direction={ 'row' }
          spacing={ 8 }
          sx={ { alignItems: 'start' } }
        >
          <Stack spacing={ 2 }>
            <FiltersForm filters={ filters } />
          </Stack>
          <Stack spacing={ 2 }>
            { recipes.length === 0
              ? (<Typography>Рецептов не найдено</Typography>)
              : recipes.map(recipe => <RecipeCard key={ recipe.id } recipe={ recipe } />)
            }
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryFilters = isString(query.filters_keys)
    ? JSON.parse(query.filters_keys) as FiltersKeys[]
    : undefined;

  const { data: recipes } = await executeRequest(() => recipesService.getShared(queryFilters));
  const { data: filters } = await executeRequest(filtersService.get);

  return {
    props: {
      recipes,
      filters,
    },
  };
};
