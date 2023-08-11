import { IProfileData } from '@/api/interfaces/auth.types';

export enum USER_INFO_SIZES {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export interface UserInfoProps {
  user: IProfileData;
  tooltip: string;
  link?: string | undefined;
  size?: `${ USER_INFO_SIZES }`;
}
