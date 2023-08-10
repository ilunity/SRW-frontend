export enum USER_ROLE {
  USER = 'USER',
  CREATOR = 'CREATOR',
  ADMIN = 'ADMIN',
}

export interface IUser {
  id: number;
  username: string;
  avatar: string;
  email: string;
  role: USER_ROLE;
}
