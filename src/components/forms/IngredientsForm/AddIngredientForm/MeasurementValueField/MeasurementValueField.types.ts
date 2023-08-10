import { AddIngredientInputs } from '@/components/forms/IngredientsForm/AddIngredientForm/AddIngredientForm.types';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { MEASUREMENT_TYPE } from '@/utils/types';

export interface MeasurementValueFieldProps {
  register: UseFormRegister<AddIngredientInputs>;
  errors: FieldErrors<AddIngredientInputs>;
  currentMeasurementType: MEASUREMENT_TYPE;
}
