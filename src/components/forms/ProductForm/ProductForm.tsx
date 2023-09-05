import React from 'react';
import { ProductFormInputs, ProductFormProps } from './ProductForm.types';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { UploadImg } from '@/components/forms/UploadImg';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { defineResolver } from '@/components/forms/ProductForm/ProductForm.resolver';

export const ProductForm: React.FC<ProductFormProps> = (
  {
    isImgRequired,
    onSubmit,
    defaultName,
  }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<ProductFormInputs>({
    resolver: defineResolver(isImgRequired),
    defaultValues: { name: defaultName },
  });

  const isImgLoaded = !!watch('img');

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
      <UploadImg
        control={ control }
        isLoaded={ isImgLoaded }
        fieldName={ 'img' }
        acceptableFiles={ ['.svg', '.png'] }
      />
      <Button variant={ 'contained' } type={ 'submit' }>
        Сохранить
      </Button>
    </Stack>
  );
};
