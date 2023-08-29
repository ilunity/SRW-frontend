import React from 'react';
import { UpdateFilterModalProps } from './UpdateFilterModal.types';
import { ErrorAlert, useErrorAlertController } from '@/components/ErrorAlert';
import { FilterFormInputs } from '@/components/forms/FilterForm/FilterForm.types';
import { filtersService } from '@/api/services';
import { CenterModal } from '@/components/layouts/CenterModal';
import { FilterForm } from '@/components/forms/FilterForm';

export const UpdateFilterModal: React.FC<UpdateFilterModalProps> = (
  {
    open,
    onClose,
    onSuccess,
    filter,
  }) => {
  const {
    errorAlertState,
    submitHandler,
  } = useErrorAlertController({
    requestFn: (data: FilterFormInputs) =>
      () => filtersService.update({ id: filter.id, ...data }),
    closeModal: onClose,
    onSuccess,
  });

  return (
    <>
      <ErrorAlert errorAlertState={ errorAlertState } />
      <CenterModal open={ open } onClose={ onClose }>
        <FilterForm
          title={ `${ filter.name }. Обновить фильтр.` }
          onSubmit={ submitHandler }
          defaultName={ filter.name }
        />
      </CenterModal>
    </>
  );
};
