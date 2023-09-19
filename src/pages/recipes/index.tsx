import { Box, Stack, useMediaQuery } from '@mui/material';
import { GetServerSideProps } from 'next';
import { IRecipePreview, RECIPE_STATUS } from '@/utils/types';
import { executeRequest } from '@/api/utils';
import { categoriesService, recipesService } from '@/api/services';
import { ICategory } from '@/api/interfaces/categories.types';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useDebounce } from 'use-debounce';
import { useEffect } from 'react';
import { CategoriesForm } from '@/components/forms/CategoriesForm';
import { RecipesGrid } from '@/components/RecipesGrid';
import { CategoriesDrawer } from 'src/components/drawers/CategoriesDrawer';
import { Theme } from '@mui/system';
import { isString } from 'next/dist/build/webpack/plugins/jsconfig-paths-plugin';

const CATEGORIES_DEBOUNCE_DELAY = 2000;


export default function Recipes({ recipes, categories }: {
  recipes: IRecipePreview[],
  categories: ICategory[],
}) {
  const router = useRouter();

  const selectedCategories = useSelector((state: RootState) => state.selectedCategories);
  const [selectedCategoriesDebounced] = useDebounce(selectedCategories, CATEGORIES_DEBOUNCE_DELAY);

  const mediaQueryLg: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  useEffect(() => {
    if (selectedCategoriesDebounced.length === 0) {
      router.push({
        href: '/',
      });
    } else {
      const categoryIds = selectedCategoriesDebounced.map(({ id }) => id);

      router.query.categories = JSON.stringify(categoryIds);
      router.push(router);
    }
  }, [selectedCategoriesDebounced]);

  return (
    <Box>
      <Stack spacing={ 4 }>
        <Stack
          direction={ 'row' }
          spacing={ {
            xs: 0,
            lg: 8,
          } }
          sx={ {
            alignItems: {
              xs: 'center',
              lg: 'start',
            },
          } }
        >
          { mediaQueryLg ?
            <Stack
              spacing={ 2 }
              sx={ {
                width: 350,
                flexShrink: 0,
              } }
            >
              <CategoriesForm categories={ categories } />
            </Stack>
            : <CategoriesDrawer categories={ categories } />
          }
          <RecipesGrid recipes={ recipes } />
        </Stack>
      </Stack>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const categoriesQuery = isString(query.categories)
    ? JSON.parse(query.categories) as number[]
    : undefined;

  const { data: recipes } = await executeRequest(() => recipesService.getPreview({
    status: RECIPE_STATUS.SHARED,
    categories: categoriesQuery,
  }));

  const { data: categories } = await executeRequest(categoriesService.get);

  return {
    props: {
      recipes,
      categories,
    },
  };
};
