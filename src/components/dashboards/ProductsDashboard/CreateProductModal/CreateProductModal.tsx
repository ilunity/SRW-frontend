import React from 'react';
import { CreateProductModalProps } from './CreateProductModal.types';
import { CreateProductForm } from 'src/components/forms/ProductForm/CreateProductForm';
import { CenterModal } from '@/components/layouts/CenterModal';
import { ErrorAlert, useErrorAlertController } from '@/components/ErrorAlert';
import { productsService } from '@/api/services';
import { ProductFormInputs } from '@/components/forms/ProductForm/ProductForm.types';

export const CreateProductModal: React.FC<CreateProductModalProps> = (
  {
    open,
    onClose,
    onSuccess,
  }) => {
  const {
    errorAlertState,
    submitHandler,
  } = useErrorAlertController({
    requestFn: (data: ProductFormInputs) => () => productsService.create(data),
    onSuccess: () => {
      onSuccess();
      onClose();
    },
  });

  return (
    <>
      <ErrorAlert errorAlertState={ errorAlertState } />
      <CenterModal
        open={ open }
        onClose={ onClose }
        title={ 'Добавить продукт' }
      >
        <CreateProductForm onSubmit={ submitHandler } />
      </CenterModal>
    </>
  );
};
