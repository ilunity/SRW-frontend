import React from 'react';
import { FilterFormInputs, FilterFormProps, FilterFormSchema } from './FilterForm.types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PaperWrapper } from '@/components/layouts/PaperWrapper';
import { Stack, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const FilterForm: React.FC<FilterFormProps> = (
  {
    title,
    onSubmit,
    defaultName,
  }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FilterFormInputs>({
    resolver: yupResolver(FilterFormSchema),
    defaultValues: defaultName ? { name: defaultName } : undefined,
  });

  return (
    <PaperWrapper>
      <Stack
        component={ 'form' }
        spacing={ 2 }
        sx={ { width: 500 } }
        onSubmit={ handleSubmit(onSubmit) }
      >
        <Typography>
          { title }
        </Typography>
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
    </PaperWrapper>
  );
};
