import { useRouter } from 'next/router';
import { authService, cookieService } from '@/api/services';
import { useEffect } from 'react';
import { Box, LinearProgress, Paper, Typography } from '@mui/material';
import { GetServerSideProps } from 'next';
import { executeRequest } from '@/api/utils';
import { getEmptyLayout } from '@/utils/layouts';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/slices';
import { ISetUserState } from '@/redux/slices/user/user-slice.types';
import { IApiError } from '@/api/utils/api.types';

interface AuthProps {
  token: string | null;
  userData: ISetUserState | null;
  error: IApiError;
}

const useLoginUser = ({ token, userData }: Omit<AuthProps, 'error'>) => {
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

export default function Auth({ token, userData, error }: AuthProps) {
  useLoginUser({ token, userData });

  return (
    <Box
      sx={ {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      } }
    >
      { userData &&
        <Box sx={ { width: 600 } }>
          <Typography
            variant={ 'h4' }
            mb={ 2 }
          >
            Переход на главную страницу...
          </Typography>
          <LinearProgress />
        </Box>
      }
      { error &&
        <Paper
          elevation={ 5 }
          sx={ {
            minWidth: 600,
            minHeight: 200,
            p: 4,
          } }
        >
          <Typography
            variant={ 'h4' }
            color={ 'error' }
          >
            Ошибка:
          </Typography>
          <Typography variant={ 'h5' }>
            Статус: { error.status }
          </Typography>
          <Typography variant={ 'h5' }>
            Сообщение: { error.message }
          </Typography>
        </Paper>
      }
    </Box>
  );
}

Auth.getLayout = getEmptyLayout;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.query.token as string;

  const props = {} as AuthProps;

  const { data, error } = await executeRequest(() => authService.profile(token));
  if (data) {
    props.userData = data;
    props.token = token;
  } else {
    props.error = error;
  }

  return { props };
};
