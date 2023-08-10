import React from 'react';
import { AddBtnProps } from './AddBtn.types';
import AddIcon from '@mui/icons-material/Add';
import { IconButtonLayout } from '@/components/icon-buttons/IconButtonLayout';

export const AddBtn: React.FC<AddBtnProps> = (props) => {
  return (
    <IconButtonLayout { ...props }>
      <AddIcon color={ 'primary' } />
    </IconButtonLayout>
  );
};
