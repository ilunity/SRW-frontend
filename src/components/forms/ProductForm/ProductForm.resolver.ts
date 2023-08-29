import { FieldErrors, Resolver } from 'react-hook-form';
import { ProductFormInputs } from '@/components/forms/ProductForm/ProductForm.types';

const DEFAULT_REQUIRED_ERROR = {
  type: 'required',
  message: 'Заполните поле.',
};

export const defineResolver = (requiredImg: boolean): Resolver<ProductFormInputs> => async (values) => {
  const nameError = !values.name;
  const imgError = requiredImg && !values.img;
  const isError = nameError || imgError;

  const errors: FieldErrors<ProductFormInputs> = {};
  if (nameError) {
    errors.name = DEFAULT_REQUIRED_ERROR;
  }
  if (imgError) {
    errors.img = DEFAULT_REQUIRED_ERROR;
  }

  return {
    values: !isError ? values : {},
    errors,
  };
};
