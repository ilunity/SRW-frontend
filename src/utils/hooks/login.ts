import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from '@/redux/slices';
import { cookieService } from '@/api/services';
import { TokenAuthPageProps } from '@/components/TokenAuthPage/Auth.types';

export type IUseLoginUser = Omit<TokenAuthPageProps, 'error'>

export const useLoginUser = ({ token, userData }: IUseLoginUser) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData && token) {
      dispatch(setUser(userData));
      cookieService.setToken(token);
      router.replace('/');
    }
  }, []);
};
