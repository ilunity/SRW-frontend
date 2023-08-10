import React from 'react';
import { ProfileInfoProps } from './ProfileInfo.types';
import { Avatar, Divider, Stack, Typography } from '@mui/material';
import { getUserRoleText } from '@/utils';
import { USER_ROLE } from '@/utils/types';

const HOST = process.env.NEXT_PUBLIC_HOST;

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ user }) => {
  return (
    <Stack
      direction={ 'row' }
      spacing={ 2 }
      divider={ <Divider orientation='vertical' flexItem /> }
    >
      <Avatar
        alt={ `Аватар пользователя ${ user.username }` }
        src={ HOST + user.avatar }
        sx={ {
          width: 120,
          height: 120,
        } }
      />
      <Stack
        sx={ {
          flex: '1 0 auto',
          justifyContent: 'center',
        } }
        spacing={ 1 }
      >
        <Typography variant={ 'h4' }>
          { user.username }
        </Typography>
        <Typography
          variant={ 'h6' }
          color={ user.role === USER_ROLE.ADMIN ? 'error' : 'primary' }
        >
          { getUserRoleText(user.role).toUpperCase() }
        </Typography>
      </Stack>
    </Stack>
  );
};
