import React from 'react';
import { IngredientItemProps } from './IngredientItem.types';
import { TableCell, TableRow } from '@mui/material';
import { MEASUREMENT_TYPE_TO_SIGN } from '@/utils/types';

export const IngredientItem: React.FC<IngredientItemProps> = ({ product }) => {
  return (
    <TableRow sx={ { '&:last-child td, &:last-child th': { border: 0 } } }>
      <TableCell component='th' scope='row'>
        { product.name }
      </TableCell>
      <TableCell align={ 'right' }>
        { product.measurement_value } { MEASUREMENT_TYPE_TO_SIGN[product.measurement_type] }
      </TableCell>
    </TableRow>
  );
};
