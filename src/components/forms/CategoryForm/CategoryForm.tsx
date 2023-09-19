import React from 'react';
import { CategoryFormInputs, CategoryFormProps, CategoryFormSchema } from './CategoryForm.types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const CategoryForm: React.FC<CategoryFormProps> = (
  {
    onSubmit,
    defaultName,
  }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormInputs>({
    resolver: yupResolver(CategoryFormSchema),
    defaultValues: defaultName ? { name: defaultName } : undefined,
  });

  return (
    <Stack
      component={ 'form' }
      spacing={ 2 }
      onSubmit={ handleSubmit(onSubmit) }
    >
      <TextField
        { ...register('name') }
        autoFocus
        error={ !!errors.name }
        label={ 'Название' }
      />
      <Button variant={ 'contained' } type={ 'submit' }>
        Сохранить
      </Button>
    </Stack>
  );
};
