import React from 'react';
import { EditBtnProps } from './EditBtn.types';

import EditIcon from '@mui/icons-material/Edit';
import { IconButtonLayout } from '@/components/icon-buttons/IconButtonLayout';

export const EditBtn: React.FC<EditBtnProps> = (props) => {
  return (
    <IconButtonLayout { ...props }>
      <EditIcon color={ 'primary' } />
    </IconButtonLayout>
  );
};
