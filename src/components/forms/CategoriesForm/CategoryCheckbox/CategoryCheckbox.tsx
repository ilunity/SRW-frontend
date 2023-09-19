import React, { MouseEvent } from 'react';
import { CategoryCheckboxProps } from './CategoryCheckbox.types';
import { Checkbox, Stack } from '@mui/material';

const LEVEL_MARGIN = 3;

export const CategoryCheckbox: React.FC<CategoryCheckboxProps> = (
  {
    label,
    level,
    isSelected,
    isIndeterminate,
    onChange,
  }) => {

  const handleChange = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onChange();
  };

  return (
    <Stack
      direction={ 'row' }
      alignItems={ 'center' }
    >
      <Checkbox
        sx={ {
          zIndex: 1,
          ml: level * LEVEL_MARGIN,
        } }
        checked={ isSelected }
        indeterminate={ isIndeterminate }
        onClick={ handleChange }
      />
      { label }
    </Stack>
  );
};
