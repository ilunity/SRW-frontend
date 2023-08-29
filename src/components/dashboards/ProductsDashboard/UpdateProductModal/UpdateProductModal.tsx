import React from 'react';
import { UpdateProductModalProps } from './UpdateProductModal.types';
import { ErrorAlert, useErrorAlertController } from '@/components/ErrorAlert';
import { CenterModal } from '@/components/layouts/CenterModal';
import { UpdateProductForm } from '@/components/forms/ProductForm/UpdateProductForm';
import { productsService } from '@/api/services';
import { ProductFormInputs } from '@/components/forms/ProductForm/ProductForm.types';
import { PartialBy } from '@/utils';

export const UpdateProductModal: React.FC<UpdateProductModalProps> = (
  {
    open,
    onClose,
    product,
    onSuccess,
  }) => {
  const {
    errorAlertState,
    submitHandler,
  } = useErrorAlertController({
    closeModal: onClose,
    requestFn: (data: PartialBy<ProductFormInputs, 'img'>) => () => productsService.update({ id: product.id, ...data }),
    onSuccess,
  });

  return (
    <>
      <ErrorAlert errorAlertState={ errorAlertState } />
      <CenterModal open={ open } onClose={ onClose }>
        <UpdateProductForm onSubmit={ submitHandler } productName={ product.name } />
      </CenterModal>
    </>
  );
};
