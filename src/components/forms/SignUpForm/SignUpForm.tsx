import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { AlertSnackbar } from '@/components/AlertSnackbar';
import { executeRequest, stringifyErrorMessage } from '@/api/utils';
import { authService } from '@/api/services';
import { SignUpFormInputs, SignUpFormProps, SignUpFormSchema } from '@/components/forms/SignUpForm/SignUpForm.types';


export const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<SignUpFormInputs>({
    resolver: yupResolver(SignUpFormSchema),
  });

  const submitHandler: SubmitHandler<SignUpFormInputs> = async (data: SignUpFormInputs) => {
    const { success, error } = await executeRequest(() => authService.signUp(data));
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
        width={ '100%' }
      >
        <TextField
          { ...register('username') }
          margin='normal'
          required
          fullWidth
          id='username'
          label='Имя'
          autoComplete='username'
          autoFocus
          error={ !!errors.username }
          helperText={ errors.username && errors.username.message }
        />
        <TextField
          { ...register('email') }
          margin='normal'
          required
          fullWidth
          id='email'
          label='Почта'
          autoComplete='email'
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
