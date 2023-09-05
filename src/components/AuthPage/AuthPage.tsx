import React, { useState } from 'react';
import { AuthPageProps } from './AuthPage.types';
import { AlertSnackbar } from '@/components/AlertSnackbar';
import { Avatar, Box, Link as MuiLink, Stack, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoginForm } from '@/components/forms/LoginForm';
import NextLink from 'next/link';
import { Copyright } from '@/components/Copyright';
import { SignUpForm } from '@/components/forms/SignUpForm';

export const AuthPage: React.FC<AuthPageProps> = ({ variant }) => {
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  return (
    <>
      <AlertSnackbar
        isOpen={ showSuccess }
        setIsOpen={ setShowSuccess }
        content={
          variant === 'login'
            ? 'На вашу почту отправлена ссылка для авторизации. Можете закрыть эту страницу.'
            : 'На вашу почту отправлена ссылка для подтверждения регистрации. Можете закрыть эту страницу.'
        }
        severity={ 'success' }
        anchorOrigin={ {
          vertical: 'bottom',
          horizontal: 'center',
        } }
      />
      <Box
        sx={ {
          paddingTop: 10,
          width: {
            xs: '100%',
            sm: 480,
          },
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        } }
      >
        <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          { variant === 'login' ? 'Вход в аккаунт' : 'Регистрация' }
        </Typography>
        { variant === 'login'
          ? <LoginForm onSubmit={ () => setShowSuccess(true) } />
          : <SignUpForm onSubmit={ () => setShowSuccess(true) } />
        }
        <Stack
          direction={ {
            xs: 'column',
            sm: 'row',
          } }
          spacing={ 2 }
          sx={ {
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          } }
        >
          { variant === 'login' && (
            <NextLink href={ '/sign-up' } passHref>
              <MuiLink>
                Зарегистрироваться
              </MuiLink>
            </NextLink>
          ) }
          <Copyright />
        </Stack>
      </Box>
    </>
  );
};
