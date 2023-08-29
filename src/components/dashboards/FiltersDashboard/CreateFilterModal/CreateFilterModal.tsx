import React from 'react';
import { CreateFilterModalProps } from './CreateFilterModal.types';
import { CenterModal } from '@/components/layouts/CenterModal';
import { FilterForm } from 'src/components/forms/FilterForm';
import { ErrorAlert, useErrorAlertController } from '@/components/ErrorAlert';
import { FilterFormInputs } from '@/components/forms/FilterForm/FilterForm.types';
import { filtersService } from '@/api/services';

export const CreateFilterModal: React.FC<CreateFilterModalProps> = (
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
    requestFn: (data: FilterFormInputs) =>
      () => filtersService.create({ parent_id: parent?.id, ...data }),
    closeModal: onClose,
    onSuccess,
  });

  return (
    <>
      <ErrorAlert errorAlertState={ errorAlertState } />
      <CenterModal open={ open } onClose={ onClose }>
        <FilterForm
          title={ parent ? `${ parent.name }. Добавить дочерний фильтр.` : 'Создать новый фильтр' }
          onSubmit={ submitHandler }
        />
      </CenterModal>
    </>
  );
};
