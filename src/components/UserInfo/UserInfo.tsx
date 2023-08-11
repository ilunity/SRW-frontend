import React from 'react';
import { USER_INFO_SIZES, UserInfoProps } from './UserInfo.types';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Tooltip } from '@mui/material';
import Link from 'next/link';

const HOST = process.env.NEXT_PUBLIC_HOST;

const SIZES: Record<USER_INFO_SIZES, number> = {
  [USER_INFO_SIZES.SMALL]: 24,
  [USER_INFO_SIZES.MEDIUM]: 40,
  [USER_INFO_SIZES.LARGE]: 56,
};

export const UserInfo: React.FC<UserInfoProps> = (
  {
    user,
    tooltip,
    link,
    size = USER_INFO_SIZES.MEDIUM,
  }) => {
  const sizeNumber = SIZES[size];

  const userInfo = (
    <ListItem
      component={ 'div' }
      sx={ { width: 'auto' } }
      disableGutters
    >
      <ListItemAvatar
        sx={ { minWidth: sizeNumber * 1.5 } }
      >
        <Avatar
          sx={ { width: sizeNumber, height: sizeNumber } }
          alt='Аватар пользователя'
          src={ HOST + user.avatar }
        >
          { user.username[0].toUpperCase() }
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={ user.username }
        primaryTypographyProps={ {
          variant: size === USER_INFO_SIZES.SMALL ? 'subtitle2' : 'subtitle1',
        } }
      />
    </ListItem>
  );

  return (
    <Tooltip title={ tooltip }>
      { link
        ? (<Link href={ link }>
            { userInfo }
          </Link>
        )
        : userInfo
      }
    </Tooltip>
  );
};
