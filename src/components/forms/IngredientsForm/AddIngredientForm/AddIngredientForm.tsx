import React from 'react';
import { AddIngredientFormProps, AddIngredientInputs } from './AddIngredientForm.types';
import { useForm } from 'react-hook-form';
import { FormHelperText, Stack } from '@mui/material';
import { IngredientsAutocomplete } from '@/components/forms/IngredientsForm/AddIngredientForm/IngredientsAutocomplete';
import { MeasurementTypeSelect } from '@/components/forms/IngredientsForm/AddIngredientForm/MeasurementTypeSelect';
import { MeasurementValueField } from '@/components/forms/IngredientsForm/AddIngredientForm/MeasurementValueField';
import Button from '@mui/material/Button';

export const AddIngredientForm: React.FC<AddIngredientFormProps> = ({ products, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<AddIngredientInputs>();

  const currentMeasurementType = watch('measurement_type');

  const isError = errors.ingredient || errors.measurement_type || errors.measurement_value;

  return (
    <Stack
      component={ 'form' }
      spacing={ 2 }
      onSubmit={ handleSubmit(onSubmit) }
    >
      <IngredientsAutocomplete
        control={ control }
        products={ products }
      />
      <MeasurementTypeSelect control={ control } />
      <MeasurementValueField
        register={ register }
        errors={ errors }
        currentMeasurementType={ currentMeasurementType }
      />
      <Button variant={ 'contained' } type={ 'submit' }>
        Добавить продукт
      </Button>
      { isError && <FormHelperText error={ !!isError }>{ 'Все поля обязательны для заполнения' }</FormHelperText> }
    </Stack>
  );
};
