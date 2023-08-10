import React from 'react';
import { DeleteBtnProps } from './DeleteBtn.types';
import { IconButtonLayout } from '@/components/icon-buttons/IconButtonLayout';
import ClearIcon from '@mui/icons-material/Clear';

export const DeleteBtn: React.FC<DeleteBtnProps> = (props) => {
  return (
    <IconButtonLayout { ...props }>
      <ClearIcon color={ 'error' } />
    </IconButtonLayout>
  );
};
