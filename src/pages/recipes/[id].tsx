import { Stack } from '@mui/material';
import { RecipeSteps } from '@/components/RecipeSteps';
import { IRecipeFull } from '@/utils/types';
import { GetServerSideProps } from 'next';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import { RecipeHeading } from '@/components/RecipeHeading';
import { executeRequest } from '@/api/utils';
import { recipesService } from '@/api/services';
import { PageContainer } from '@/components/PageContainer';
import { CommentsBlock } from '@/components/CommentsBlock';
import { RatePanel } from '@/components/RatePanel';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import {
  ResponsiveRecipeIngredients,
} from 'src/components/page-helper-components/recipes/id/ResponsiveRecipeIngredients';

export default function Recipe({ recipe }: {
  recipe: IRecipeFull
}) {
  const user = useSelector((state: RootState) => state.user.payload);

  return (
    <PageContainer>
      <Stack
        spacing={ 4 }
        direction={ {
          xs: 'column',
          md: 'row',
        } }
        sx={ {
          justifyContent: 'space-between',
          alignItems: 'start',
        } }
      >
        <Stack
          spacing={ 4 }
          sx={ {
            width: {
              xs: '100%',
              md: '65%',
            },
          } }
        >
          <RecipeHeading recipe={ recipe } />
          <RecipeSteps steps={ recipe.steps } />
          <CommentsBlock comments={ recipe.comments } recipeId={ recipe.id } />
          { user &&
            <RatePanel recipeId={ recipe.id } />
          }
        </Stack>
        <ResponsiveRecipeIngredients recipeProducts={ recipe.products } />
      </Stack>
    </PageContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const recipeId = (params as NextParsedUrlQuery).id;
  const { data: recipe, error } = await executeRequest(() => recipesService.get(Number(recipeId)));

  if (error) {
    throw new Error();
  }

  return {
    props: {
      recipe,
    },
  };
};
