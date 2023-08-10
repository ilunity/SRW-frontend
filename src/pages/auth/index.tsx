import * as React from 'react';
import { useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { LoginForm } from 'src/components/forms/LoginForm';
import { getEmptyLayout } from '@/utils/layouts';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { AlertSnackbar } from '@/components/AlertSnackbar';


export default function Auth() {
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  return (
    <>
      <AlertSnackbar
        isOpen={ showSuccess }
        setIsOpen={ setShowSuccess }
        content={ 'На вашу почту отправлена ссылка для авторизации. Можете закрыть эту страницу.' }
        severity={ 'success' }
        anchorOrigin={ {
          vertical: 'bottom',
          horizontal: 'center',
        } }
      />
      <Box
        sx={ {
          paddingTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        } }
      >
        <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <LoginForm onSubmit={ () => setShowSuccess(true) } />
      </Box>
    </>
  );
}

Auth.getLayout = getEmptyLayout;
