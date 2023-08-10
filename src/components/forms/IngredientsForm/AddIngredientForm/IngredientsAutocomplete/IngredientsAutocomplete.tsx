import React, { SyntheticEvent } from 'react';
import { IngredientsAutocompleteProps, Option } from './IngredientsAutocomplete.types';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useController } from 'react-hook-form';

export const IngredientsAutocomplete: React.FC<IngredientsAutocompleteProps> = ({ control, products }) => {
  const options: Option[] = products.map(({ name, ...rest }) => ({ label: name, ...rest }));

  const {
    field: { onChange, onBlur, ref },
    formState: { errors },
  } = useController({
    name: 'ingredient',
    control: control,
    rules: { required: true },
  });

  const handleChangeData = (event: SyntheticEvent<Element, Event>, data: Option | null) => {
    if (data) {
      const { label, ...rest } = data;
      onChange({ name: label, ...rest });
    }
  };

  return (
    <Autocomplete
      options={ options }
      onBlur={ onBlur }
      ref={ ref }
      onChange={ handleChangeData }
      renderInput={
        (params) => (
          <TextField
            { ...params }
            label={ 'Продукт' }
            error={ !!errors.ingredient }
          />
        ) }
      clearOnEscape
    />
  );
};
