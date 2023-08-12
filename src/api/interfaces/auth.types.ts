import { USER_ROLE } from '@/utils/types';

export interface IProfileData {
  id: number;
  username: string;
  avatar: string;
  role: USER_ROLE;
}

// DTOs

export interface SignUpDto {
  readonly username: string;
  readonly email: string;
}
