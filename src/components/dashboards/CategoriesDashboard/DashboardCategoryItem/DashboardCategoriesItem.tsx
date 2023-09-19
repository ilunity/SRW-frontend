import React, { useState } from 'react';
import { DashboardCategoryItemProps } from './DashboardCategoryItem.types';
import { Stack, Typography } from '@mui/material';
import { AddChildBtn } from 'src/components/icon-buttons/AddChildBtn';
import { CreateCategoryModal } from '@/components/dashboards/CategoriesDashboard/CreateCategoryModal';
import { EditBtn } from '@/components/icon-buttons/EditBtn';
import { UpdateCategoryModal } from '@/components/dashboards/CategoriesDashboard/UpdateCategoryModal';

export const DashboardCategoriesItem: React.FC<DashboardCategoryItemProps> = ({ category, updateCategories }) => {
  const [openCreateCategoryForm, setOpenCreateCategoryForm] = useState<boolean>(false);
  const [openUpdateCategoryForm, setOpenUpdateCategoryForm] = useState<boolean>(false);

  return (
    <>
      <CreateCategoryModal
        open={ openCreateCategoryForm }
        onClose={ () => setOpenCreateCategoryForm(false) }
        onSuccess={ updateCategories }
        parent={ category }
      />
      <UpdateCategoryModal
        open={ openUpdateCategoryForm }
        onClose={ () => setOpenUpdateCategoryForm(false) }
        onSuccess={ updateCategories }
        category={ category }
      />
      <Stack
        direction={ 'row' }
        alignItems={ 'center' }
        sx={ { width: '100%' } }
      >
        <AddChildBtn
          title={ 'Добавить дочернюю категорию' }
          onClick={ (event) => {
            event.stopPropagation();
            setOpenCreateCategoryForm(true);
          } }
          size={ 'small' }
        />
        <EditBtn
          title={ 'Изменить категорию' }
          onClick={ (event) => {
            event.stopPropagation();
            setOpenUpdateCategoryForm(true);
          } }
          size={ 'small' }
        />
        <Typography variant={ 'subtitle1' }>{ category.name }</Typography>
      </Stack>
    </>
  );
};
