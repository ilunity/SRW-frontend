import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardMedia, Stack } from '@mui/material';
import { AddBtn } from '@/components/icon-buttons/AddBtn';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { CenterModal } from '@/components/layouts/CenterModal';
import { EditBtn } from '@/components/icon-buttons/EditBtn';
import { SetDescriptionForm } from '@/components/forms/DescriptionForm/SetDescriptionForm';
import {
  SetDescriptionFormInputs,
} from '@/components/forms/DescriptionForm/SetDescriptionForm/SetDescriptionForm.types';
import { setDescription } from '@/redux/slices';
import { RecipeDescription } from '@/components/RecipeDescription';
import { RowContainer } from 'src/components/RowContainer';
import { TimeLabel } from '@/components/labels';
import { ServingsNumberLabel } from '@/components/labels/ServingsNumberLabel';
import { CaloriesTable } from '@/components/CaloriesTable';

export const DescriptionForm: React.FC<DescriptionFormProps> = () => {
  const [openSetDescriptionModal, setOpenSetDescriptionModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const description = useSelector((state: RootState) => state.createdRecipe.description);

  const handleSetDescription = (data: SetDescriptionFormInputs) => {
    dispatch(setDescription(data));
    setOpenSetDescriptionModal(false);
  };

  return (
    <>
      <CenterModal
        open={ openSetDescriptionModal }
        onClose={ () => setOpenSetDescriptionModal(false) }
      >
        <SetDescriptionForm onSubmit={ handleSetDescription } defaultValue={ description } />
      </CenterModal>
      <Card
        sx={ {
          borderRadius: 3,
          width: 850,
        } }
      >
        <CardHeader
          title={ description ? description.title : 'Создайте новый рецепт' }
          action={ description
            ? <EditBtn title={ 'Изменить описание' } onClick={ () => setOpenSetDescriptionModal(true) } />
            : <AddBtn title={ 'Добавить описание' } onClick={ () => setOpenSetDescriptionModal(true) } />
          }
        />
        <CardContent>
          { description &&
            <>
              { description.img &&
                <CardMedia
                  component={ 'img' }
                  src={ description.img }
                  alt={ 'Фотография блюда' }
                  sx={ {
                    float: 'left',
                    width: 400,
                    height: 250,
                    borderRadius: 2,
                    mr: 2,
                    mb: 1,
                  } }
                />
              }
              <Stack spacing={ 2 } sx={ { mb: 3 } }>
                <RowContainer>
                  <TimeLabel time={ description.time } />
                  <ServingsNumberLabel servings_number={ description.servings_number } />
                </RowContainer>
                <CaloriesTable cals={ 152 } proteins={ 5 } fats={ 6 } carbs={ 17 } />
              </Stack>
              <RecipeDescription description={ description.description } />
            </>
          }
        </CardContent>
      </Card>
    </>
  );
};
