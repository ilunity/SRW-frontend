import React from 'react';
import { AddChildBtnProps } from './AddChildBtn.types';
import { IconButtonLayout } from '@/components/icon-buttons/IconButtonLayout';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

export const AddChildBtn: React.FC<AddChildBtnProps> = (props) => {
  return (
    <IconButtonLayout { ...props }>
      <LibraryAddIcon color={ 'primary' } />
    </IconButtonLayout>
  );
};
