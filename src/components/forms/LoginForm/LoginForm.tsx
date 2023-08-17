import React from 'react';
import { LoginFormInputs, LoginFormProps, LoginFormSchema } from './LoginForm.types';
import { SubmitHandler, useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { AlertSnackbar } from '@/components/AlertSnackbar';
import { executeRequest, stringifyErrorMessage } from '@/api/utils';
import { authService } from '@/api/services';


export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(LoginFormSchema),
  });

  const submitHandler: SubmitHandler<LoginFormInputs> = async (data: LoginFormInputs) => {
    const { success, error } = await executeRequest(() => authService.login(data.email));
    if (success) {
      return onSubmit();
    }

    setError('root', {
      type: 'serverError',
      message: stringifyErrorMessage(error),
    });
  };

  return (
    <>
      <AlertSnackbar
        isOpen={ !!errors.root }
        severity={ 'error' }
        setIsOpen={ () => clearErrors('root') }
        content={ errors.root?.message }
        anchorOrigin={ {
          vertical: 'bottom',
          horizontal: 'center',
        } }
        autoHideDuration={ 5000 }
      />
      <Box
        component='form'
        onSubmit={ handleSubmit(submitHandler) }
      >
        <TextField
          { ...register('email') }
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          autoComplete='email'
          autoFocus
          error={ !!errors.email }
          helperText={ errors.email && errors.email.message }
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={ { mt: 3, mb: 2 } }
        >
          Отправить ссылку на почту
        </Button>
      </Box>
    </>
  );
};
