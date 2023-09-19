import React from 'react';
import { CreateCategoryModalProps } from './CreateCategoryModal.types';
import { CenterModal } from '@/components/layouts/CenterModal';
import { CategoryForm } from 'src/components/forms/CategoryForm';
import { ErrorAlert, useErrorAlertController } from '@/components/ErrorAlert';
import { CategoryFormInputs } from '@/components/forms/CategoryForm/CategoryForm.types';
import { categoriesService } from '@/api/services';

export const CreateCategoryModal: React.FC<CreateCategoryModalProps> = (
  {
    open,
    onClose,
    onSuccess,
    parent,
  }) => {
  const {
    errorAlertState,
    submitHandler,
  } = useErrorAlertController({
    requestFn: (data: CategoryFormInputs) =>
      () => categoriesService.create({ parent_id: parent?.id, ...data }),
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
        title={ parent ? `${ parent.name }. Добавить дочернию категорию.` : 'Создать новую категорию' }
      >
        <CategoryForm onSubmit={ submitHandler } />
      </CenterModal>
    </>
  );
};
