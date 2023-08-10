import React from 'react';
import { MeasurementValueFieldProps } from './MeasurementValueField.types';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { MEASUREMENT_TYPE_TO_SIGN } from '@/utils/types';

export const MeasurementValueField: React.FC<MeasurementValueFieldProps> = (
  {
    register,
    errors,
    currentMeasurementType,
  }) => {
  return (
    <TextField
      { ...register('measurement_value', { required: true }) }
      error={ !!errors.measurement_value }
      label={ 'Кол-во продукта' }
      InputProps={ {
        endAdornment: <InputAdornment position='end'>
          { MEASUREMENT_TYPE_TO_SIGN[currentMeasurementType] }
        </InputAdornment>,
      } }
    />
  );
};
