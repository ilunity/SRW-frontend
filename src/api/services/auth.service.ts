import { axiosInstance } from '@/api/utils/axios-instance';
import { ApiRequestFnResponse } from '@/api/utils/api.types';
import { IProfileData } from '@/api/interfaces/auth.types';

const url = axiosInstance.defaults.baseURL + 'auth/';

class AuthService {
  public login(email: string): ApiRequestFnResponse<''> {
    return axiosInstance.post(`${ url }login/`, { email });
  }

  public profile(token: any): ApiRequestFnResponse<IProfileData> {
    return axiosInstance.get(`${ url }profile/`, {
      headers: {
        'Authorization': `Bearer ${ token }`,
      },
    });
  }
}

export const authService = new AuthService();
