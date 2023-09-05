import { Box, Stack, useMediaQuery } from '@mui/material';
import { GetServerSideProps } from 'next';
import { IRecipePreview } from '@/utils/types';
import { executeRequest } from '@/api/utils';
import { filtersService, recipesService } from '@/api/services';
import { FiltersKeys, IFiltersData } from '@/api/interfaces/filters.types';
import { isString } from 'next/dist/build/webpack/plugins/jsconfig-paths-plugin';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useDebounce } from 'use-debounce';
import { useEffect } from 'react';
import { FiltersForm } from '@/components/forms/FiltersForm';
import { RecipesGrid } from '@/components/RecipesGrid';
import { FiltersDrawer } from 'src/components/drawers/FiltersDrawer';
import { Theme } from '@mui/system';

const FILTERS_DEBOUNCE_DELAY = 2000;


export default function Recipes({ recipes, filters }: {
  recipes: IRecipePreview[],
  filters: IFiltersData[],
}) {
  const router = useRouter();

  const selectedFilters = useSelector((state: RootState) => state.selectedFilters);
  const [selectedFiltersDebounced] = useDebounce(selectedFilters, FILTERS_DEBOUNCE_DELAY);

  const mediaQueryLg: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

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
              <FiltersForm filters={ filters } />
            </Stack>
            : <FiltersDrawer filters={ filters } />
          }
          <RecipesGrid recipes={ recipes } />
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
