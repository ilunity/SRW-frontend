import { Box } from '@mui/material';
import { IngredientsForm } from '@/components/forms/IngredientsForm';
import { StepsForm } from '@/components/forms/StepsForm';
import { DescriptionForm } from '@/components/forms/DescriptionForm';
import { CategoriesForm } from '@/components/forms/CategoriesForm';
import { ICategory } from '@/api/interfaces/categories.types';
import { executeRequest } from '@/api/utils';
import { categoriesService } from '@/api/services';
import { PageContainer } from '@/components/PageContainer';
import {
  FirstColumnContainer,
  MainContainer,
  SecondColumnContainer,
  SubmitButton,
} from '@/components/page-helper-components/recipes/create/';
import { LayoutConstructor } from '@/utils/layout-constructor';
import { GetServerSideProps } from 'next';

export default function CreateRecipe({ categories }: {
  categories: ICategory[]
}) {
  return (
    <PageContainer>
      <MainContainer>
        <FirstColumnContainer>
          <DescriptionForm />
          <StepsForm />
        </FirstColumnContainer>
        <SecondColumnContainer>
          <Box width={ '100%' }>
            <IngredientsForm />
          </Box>
          <Box width={ '100%' }>
            <CategoriesForm categories={ categories } />
          </Box>
        </SecondColumnContainer>
      </MainContainer>
      <SubmitButton />
    </PageContainer>
  );
}

CreateRecipe.layout = new LayoutConstructor().standard().checkUserExists();

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: categories } = await executeRequest(categoriesService.get);

  return {
    props: {
      categories,
    },
  };
};
