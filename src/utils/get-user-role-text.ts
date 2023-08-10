import { USER_ROLE } from '@/utils/types';

export const getUserRoleText = (role: USER_ROLE) => {
  const roleToText = {
    [USER_ROLE.USER]: 'user',
    [USER_ROLE.ADMIN]: 'admin',
    [USER_ROLE.CREATOR]: 'creator',
  };

  return roleToText[role];
};
