import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { RecipeStep } from 'src/components/forms/StepsForm/RecipeStep';
import { CenterModal } from '@/components/layouts/CenterModal';
import { AddBtn } from '@/components/icon-buttons/AddBtn';
import { SetStepForm } from 'src/components/forms/StepsForm/SetStepForm';
import { SetStepFormInputs } from '@/components/forms/StepsForm/SetStepForm/SetStepForm.types';
import { addStep } from '@/redux/slices';

export const StepsForm: React.FC = () => {
  const [openAddStepModal, setOpenAddStepModal] = useState<boolean>(false);
  const addedSteps = useSelector((state: RootState) => state.createdRecipe.steps);
  const dispatch = useDispatch();

  const handleAddStep = (step: SetStepFormInputs) => {
    dispatch(addStep(step));
    setOpenAddStepModal(false);
  };

  return (
    <>
      <CenterModal
        open={ openAddStepModal }
        onClose={ () => setOpenAddStepModal(false) }
      >
        <SetStepForm onSubmit={ handleAddStep } />
      </CenterModal>
      <Card
        sx={ {
          borderRadius: 3,
          width: 850,
        } }
      >
        <CardHeader
          title={ 'Инструкция:' }
          action={ <AddBtn title={ 'Добавить элемент инструкции' } onClick={ () => setOpenAddStepModal(true) } /> }
        />
        <CardContent>
          <Stack spacing={ 2 }>
            { addedSteps.map((step, index) => <RecipeStep key={ index } index={ index } step={ step } />) }
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
