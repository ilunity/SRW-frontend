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
      sx={ {
        alignItems: 'center',
      } }
    >
      <Avatar
        alt={ `Аватар пользователя ${ user.username }` }
        src={ HOST + user.avatar }
        sx={ {
          width: {
            xs: 60,
            sm: 90,
            lg: 120,
          },
          height: {
            xs: 60,
            sm: 90,
            lg: 120,
          },
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
