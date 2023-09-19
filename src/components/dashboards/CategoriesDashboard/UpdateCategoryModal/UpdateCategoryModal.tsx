import React from 'react';
import { UpdateCategoryModalProps } from './UpdateCategoryModal.types';
import { ErrorAlert, useErrorAlertController } from '@/components/ErrorAlert';
import { CategoryFormInputs } from '@/components/forms/CategoryForm/CategoryForm.types';
import { categoriesService } from '@/api/services';
import { CenterModal } from '@/components/layouts/CenterModal';
import { CategoryForm } from 'src/components/forms/CategoryForm';

export const UpdateCategoryModal: React.FC<UpdateCategoryModalProps> = (
  {
    open,
    onClose,
    onSuccess,
    category,
  }) => {
  const {
    errorAlertState,
    submitHandler,
  } = useErrorAlertController({
    requestFn: (data: CategoryFormInputs) =>
      () => categoriesService.update({ id: category.id, ...data }),
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
        title={ 'Обновить категорию' }
      >
        <CategoryForm
          onSubmit={ submitHandler }
          defaultName={ category.name }
        />
      </CenterModal>
    </>
  );
};
