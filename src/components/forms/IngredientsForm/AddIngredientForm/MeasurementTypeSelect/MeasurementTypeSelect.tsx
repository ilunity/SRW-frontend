import React from 'react';
import { MeasurementTypeSelectProps } from './MeasurementTypeSelect.types';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import { MEASUREMENT_TYPE, MEASUREMENT_TYPE_TO_TEXT } from '@/utils/types';
import { useController } from 'react-hook-form';

export const MeasurementTypeSelect: React.FC<MeasurementTypeSelectProps> = ({ control }) => {
  const {
    field: { onChange, value },
    formState: { errors },
  } = useController({
    name: 'measurement_type',
    control,
    rules: { required: true },
  });

  return (
    <FormControl sx={ { m: 1, width: 300 } }>
      <InputLabel error={ !!errors.measurement_type }>Единицы измерения</InputLabel>
      <Select
        value={ value }
        label={ 'Ранжирование' }
        onChange={ (event: SelectChangeEvent) => {
          onChange(event.target.value);
        } }
        input={ <OutlinedInput label={ 'Единицы измерения' } /> }
        error={ !!errors.measurement_type }
      >
        { Object.values(MEASUREMENT_TYPE).map(value =>
          <MenuItem key={ value } value={ value }>
            { MEASUREMENT_TYPE_TO_TEXT[value] }
          </MenuItem>,
        ) }
      </Select>
    </FormControl>
  );
};
