import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLogout } from '@/utils/hooks';
import { IconButtonLayout } from '@/components/icon-buttons/IconButtonLayout';

export const LogoutBtn: React.FC = () => {
  const logout = useLogout();

  return (
    <IconButtonLayout title={ 'Выйти' } onClick={ logout }>
      <LogoutIcon />
    </IconButtonLayout>
  );
};
