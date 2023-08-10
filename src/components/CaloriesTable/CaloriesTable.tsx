import React from 'react';
import { CaloriesTableProps } from './CaloriesTable.types';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

export const CaloriesTable: React.FC<CaloriesTableProps> = ({ cals, proteins, fats, carbs }) => {
  return (
    <Table size='small' aria-label='a dense table'>
      <TableHead>
        <TableRow>
          <TableCell>Калории</TableCell>
          <TableCell align='right'>Белки&nbsp;(g)</TableCell>
          <TableCell align='right'>Жиры&nbsp;(g)</TableCell>
          <TableCell align='right'>Углеводы&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell component='th' scope='row'>{ cals }</TableCell>
          <TableCell align='right'>{ proteins }</TableCell>
          <TableCell align='right'>{ fats }</TableCell>
          <TableCell align='right'>{ carbs }</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
