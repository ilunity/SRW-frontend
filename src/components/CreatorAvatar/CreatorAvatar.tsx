import React from 'react';
import { CreatorAvatarProps } from './CreatorAvatar.types';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Tooltip } from '@mui/material';
import Link from 'next/link';

const HOST = process.env.NEXT_PUBLIC_HOST;

export const CreatorAvatar: React.FC<CreatorAvatarProps> = ({ user }) => {
  return (
    <Tooltip title={ 'Профиль' }>
      <Link href={ '/profile' }>
        <ListItem
          component={ 'div' }
          sx={ { width: 'auto' } }
        >
          <ListItemAvatar>
            <Avatar
              alt='Аватар пользователя'
              src={ HOST + user.avatar }
            >
              { user.username[0].toUpperCase() }
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={ user.username } />
        </ListItem>
      </Link>
    </Tooltip>
  );
};
