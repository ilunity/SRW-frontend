import { ISetUserState } from '@/redux/slices/user/user-slice.types';
import { IApiError } from '@/api/utils/api.types';

export interface TokenAuthPageProps {
  token: string | null;
  userData: ISetUserState | null;
  error: IApiError;
}
