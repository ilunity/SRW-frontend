import React from 'react';
import { ReloadBtnProps } from './ReloadBtn.types';
import ReplayIcon from '@mui/icons-material/Replay';
import { IconButtonLayout } from '@/components/icon-buttons/IconButtonLayout';

export const ReloadBtn: React.FC<ReloadBtnProps> = (props) => {
  return (
    <IconButtonLayout { ...props }>
      <ReplayIcon color={ 'primary' } />
    </IconButtonLayout>
  );
};
