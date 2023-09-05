import React from 'react';
import { ProfilePanelProps } from './ProfilePanel.types';
import { USER_ROLE } from '@/utils/types';
import { LinkButton } from '@/components/LinkButton';
import { Divider, Stack, useMediaQuery } from '@mui/material';
import { LogoutBtn } from '@/components/icon-buttons/LogoutBtn';
import { ProfileInfo } from '@/components/ProfileInfo';
import { DashboardLinkBtn } from '@/components/icon-buttons/DashboardLinkBtn';
import { Theme } from '@mui/system';

export const ProfilePanel: React.FC<ProfilePanelProps> = ({ user }) => {
  const adminPanelLink = user.role === USER_ROLE.ADMIN && (
    <LinkButton href={ '/dashboard' } color={ 'error' }>
      Админ панель
    </LinkButton>
  );

  const mediaQuerySm = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Stack
      spacing={ 4 }
      direction={ 'row' }
      justifyContent={ 'space-between' }
    >
      <ProfileInfo user={ user } />
      <Stack
        spacing={ 1 }
        divider={ <Divider orientation='horizontal' flexItem /> }
      >
        { mediaQuerySm && adminPanelLink }
        <Stack direction={ 'row' } justifyContent={ 'end' }>
          { !mediaQuerySm && <DashboardLinkBtn /> }
          <LogoutBtn />
        </Stack>
      </Stack>
    </Stack>
  );
};
