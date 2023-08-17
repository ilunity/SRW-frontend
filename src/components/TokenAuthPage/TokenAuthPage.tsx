import React from 'react';
import { TokenAuthPageProps } from './Auth.types';
import { useLoginUser } from '@/utils/hooks';
import { Box, LinearProgress, Paper, Typography } from '@mui/material';

export const TokenAuthPage: React.FC<TokenAuthPageProps> = ({ token, userData, error }) => {
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
};
