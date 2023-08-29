import React from 'react';
import { ProductForm } from '@/components/forms/ProductForm';
import { UpdateProductFormProps } from '@/components/forms/ProductForm/UpdateProductForm/UpdateProductForm.types';

export const UpdateProductForm: React.FC<UpdateProductFormProps> = (
  {
    onSubmit,
    productName,
  }) => {
  return (
    <ProductForm
      isImgRequired={ false }
      title={ `${ productName }. Обновить продукт.` }
      onSubmit={ onSubmit }
      defaultName={ productName }
    />
  );
};
