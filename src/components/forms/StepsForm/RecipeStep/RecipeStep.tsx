import React, { useState } from 'react';
import { RecipeStepProps } from './RecipeStep.types';
import { Card, CardContent, CardHeader, CardMedia, Divider, Stack } from '@mui/material';
import { EditBtn } from '@/components/icon-buttons/EditBtn';
import { DeleteBtn } from '@/components/icon-buttons/DeleteBtn';
import { useDispatch } from 'react-redux';
import { deleteStepByIndex, setStep } from '@/redux/slices';
import { SetStepForm } from '@/components/forms/StepsForm/SetStepForm';
import { CenterModal } from '@/components/layouts/CenterModal';
import { SetStepFormInputs } from '@/components/forms/StepsForm/SetStepForm/SetStepForm.types';

export const RecipeStep: React.FC<RecipeStepProps> = ({ step, index }) => {
  const [openEditStepModal, setOpenEditStepModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const deleteStep = () => {
    dispatch(deleteStepByIndex(index));
  };

  const handleEditStep = (data: SetStepFormInputs) => {
    dispatch(setStep({ index, step: data }));
    setOpenEditStepModal(false);
  };

  return (
    <>
      <CenterModal
        open={ openEditStepModal }
        onClose={ () => setOpenEditStepModal(false) }
      >
        <SetStepForm onSubmit={ handleEditStep } defaultValue={ step } />
      </CenterModal>
      <Card
        variant={ 'outlined' }
        sx={ {
          borderRadius: 3,
        } }
      >
        <CardHeader
          title={ `Шаг ${ index + 1 }` }
          action={ <Stack direction={ 'row' }>
            <EditBtn title={ 'Изменить' } onClick={ () => setOpenEditStepModal(true) } />
            <DeleteBtn title={ 'Удалить' } onClick={ deleteStep } />
          </Stack> }
        />
        <Divider orientation={ 'horizontal' } variant={ 'middle' } />
        <CardContent>
          { step.img &&
            <CardMedia
              component={ 'img' }
              src={ step.img }
              alt={ 'Фотография шага инструкции' }
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
          { step.content }
        </CardContent>
      </Card>
    </>
  );
};
