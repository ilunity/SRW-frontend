import { Stack } from '@mui/material';
import { Ingredients } from '@/components/Ingredients';
import { RecipeSteps } from '@/components/RecipeSteps';
import { IRecipeData } from '@/utils/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import { RecipeHeading } from '@/components/RecipeHeading';
import { RatePanel } from '@/components/RatePanel';
import { executeRequest } from '@/api/utils';
import { recipesService } from '@/api/services';
import { CommentsBlock } from '@/components/CommentsBlock';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

export default function Recipe({ recipe }: { recipe: IRecipeData }) {
  const user = useSelector((state: RootState) => state.user.payload);

  return (
    <Stack
      direction={ 'row' }
      sx={ {
        justifyContent: {
          xs: 'center',
          lg: 'space-between',
        },
        alignItems: 'flex-start',
      } }
    >
      <Stack
        spacing={ 4 }
        sx={ {
          width: {
            xs: 300,
            sm: 580,
            md: 700,
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
      <Ingredients recipeProducts={ recipe.products } />
    </Stack>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await executeRequest(recipesService.getSharedIds);

  if (!data) {
    throw new Error();
  }

  const paths = data.map(({ id }) => {
    return {
      params: {
        id: String(id),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // todo Добавить проверку для params === undefined
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
