import { USER_ROLE } from '@/utils/types';

export interface UserState {
  payload: {
    id: number;
    username: string;
    avatar: string;
    role: USER_ROLE;
  } | null;
}

export interface ISetUserState {
  id: number;
  username: string;
  avatar: string;
  role: USER_ROLE;
}
