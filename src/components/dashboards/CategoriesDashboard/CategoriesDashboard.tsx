import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Stack } from '@mui/material';
import { useApiRequest } from '@/api/utils';
import { categoriesService } from '@/api/services';
import { DashboardCategory } from '@/components/dashboards/CategoriesDashboard/DashboardCategory';
import { AddBtn } from '@/components/icon-buttons/AddBtn';
import { CreateCategoryModal } from '@/components/dashboards/CategoriesDashboard/CreateCategoryModal';

export const CategoriesDashboard: React.FC = () => {
  const [updateCategoriesCounter, setUpdateCategoriesCounter] = useState<number>(0);
  const [openCreateCategoryForm, setOpenCreateCategoryForm] = useState<boolean>(false);

  const { data: categories } = useApiRequest(categoriesService.get, { deps: [updateCategoriesCounter] });

  const updateCategories = () => setUpdateCategoriesCounter(prevState => prevState + 1);

  return (
    <>
      <CreateCategoryModal
        open={ openCreateCategoryForm }
        onClose={ () => setOpenCreateCategoryForm(false) }
        onSuccess={ updateCategories }
      />
      <Stack spacing={ 8 }>
        { categories &&
          <Card sx={ { borderRadius: 3 } }>
            <CardHeader
              title={ `Категории:` }
              action={
                <AddBtn
                  title={ 'Добавить категорию' }
                  onClick={ () => setOpenCreateCategoryForm(true) }
                />
              }
            />
            <CardContent>
              <Stack>
                { categories.map(category => (
                  <DashboardCategory
                    key={ category.id }
                    category={ category }
                    updateCategories={ updateCategories }
                  />
                )) }
              </Stack>
            </CardContent>
          </Card>
        }
      </Stack>
    </>
  );
};
