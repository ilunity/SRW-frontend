import React from 'react';
import { ProductForm } from '@/components/forms/ProductForm';
import { CreateProductFormProps } from '@/components/forms/ProductForm/CreateProductForm/CreateProductForm.types';

export const CreateProductForm: React.FC<CreateProductFormProps> = ({ onSubmit }) => {
  return (
    <ProductForm
      isImgRequired={ true }
      title={ 'Создать новый продукт' }
      onSubmit={ onSubmit }
    />
  );
};
