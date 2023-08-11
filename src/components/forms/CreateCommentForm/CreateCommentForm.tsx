import React, { useState } from 'react';
import { CreateCommentFormInputs, CreateCommentFormProps, CreateCommentFormSchema } from './CreateCommentForm.types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type DeliveringStatus = 'success' | 'error' | null;

export const CreateCommentForm: React.FC<CreateCommentFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<CreateCommentFormInputs>({
    resolver: yupResolver(CreateCommentFormSchema),
  });
  const [deliveringStatus, setDeliveringStatus] = useState<DeliveringStatus>(null);

  return (
    <Stack
      component={ 'form' }
      spacing={ 2 }
      onSubmit={ handleSubmit(async (data) => {
        const error = await onSubmit(data);

        if (!error) {
          setDeliveringStatus('success');
          reset();
        } else {
          setDeliveringStatus('error');
          setError('root', {
            type: 'serverError',
            message: Array.isArray(error.message)
              ? error.message.reduce((previous, current) => previous + `\n${ current }`)
              : error.message,
          });
        }

        setTimeout(() => setDeliveringStatus(null), 500);
      }) }
    >
      <TextField
        fullWidth
        { ...register('text') }
        error={ !!errors.text || !!errors.root }
        helperText={
          errors.text
            ? 'Комментарий не должен быть пустым'
            : errors.root
              ? errors.root.message
              : ''
        }
        label={ 'Ваш комментарий' }
        multiline
        minRows={ 3 }
      />
      <Button
        variant={ 'contained' }
        type={ 'submit' }
        color={ deliveringStatus ? deliveringStatus : 'primary' }
      >
        Отправить
      </Button>
    </Stack>
  );
};
