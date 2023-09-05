import React from 'react';
import { DashboardLinkBtnProps } from './DashboardLinkBtn.types';
import { IconButtonLayout } from '@/components/icon-buttons/IconButtonLayout';
import AdminPanelIcon from '@mui/icons-material/AdminPanelSettings';
import { useRouter } from 'next/router';

export const DashboardLinkBtn: React.FC<DashboardLinkBtnProps> = (props) => {
  const router = useRouter();

  const toDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <IconButtonLayout
      { ...props }
      onClick={ toDashboard }
      title={ 'Админ панель' }
    >
      <AdminPanelIcon color={ 'error' } />
    </IconButtonLayout>
  );
};
