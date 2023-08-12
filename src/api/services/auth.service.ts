import { axiosInstance } from '@/api/utils/axios-instance';
import { ApiRequestFnResponse } from '@/api/utils/api.types';
import { IProfileData, SignUpDto } from '@/api/interfaces/auth.types';

const url = axiosInstance.defaults.baseURL + 'auth/';

class AuthService {
  public login(email: string): ApiRequestFnResponse<''> {
    return axiosInstance.post(`${ url }login/`, { email });
  }

  public profile(token: string): ApiRequestFnResponse<IProfileData> {
    return axiosInstance.get(`${ url }profile/`, {
      headers: {
        'Authorization': `Bearer ${ token }`,
      },
    });
  }

  public signUp(signUpDto: SignUpDto): ApiRequestFnResponse<''> {
    return axiosInstance.post(`${ url }signup/`, signUpDto);
  }

  public register(token: string): ApiRequestFnResponse<IProfileData> {
    return axiosInstance.get(`${ url }register/`, {
      headers: {
        'Authorization': `Bearer ${ token }`,
      },
    });
  }
}

export const authService = new AuthService();
