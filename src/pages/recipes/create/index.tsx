import { Box } from '@mui/material';
import { IngredientsForm } from '@/components/forms/IngredientsForm';
import { StepsForm } from '@/components/forms/StepsForm';
import { DescriptionForm } from '@/components/forms/DescriptionForm';
import { FiltersForm } from '@/components/forms/FiltersForm';
import { IFiltersData } from '@/api/interfaces/filters.types';
import { executeRequest } from '@/api/utils';
import { filtersService } from '@/api/services';
import { PageContainer } from '@/components/PageContainer';
import {
  FirstColumnContainer,
  MainContainer,
  SecondColumnContainer,
  SubmitButton,
} from '@/components/page-helper-components/recipes/create/';
import { LayoutConstructor } from '@/utils/layout-constructor';
import { GetServerSideProps } from 'next';

export default function CreateRecipe({ filters }: {
  filters: IFiltersData[]
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
            <FiltersForm filters={ filters } />
          </Box>
        </SecondColumnContainer>
      </MainContainer>
      <SubmitButton />
    </PageContainer>
  );
}

CreateRecipe.layout = new LayoutConstructor().standard().checkUserExists();

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: filters } = await executeRequest(filtersService.get);

  return {
    props: {
      filters,
    },
  };
};
