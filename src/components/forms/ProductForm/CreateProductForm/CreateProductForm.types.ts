import { ProductFormInputs } from '@/components/forms/ProductForm/ProductForm.types';

export interface CreateProductFormProps {
  onSubmit: (data: ProductFormInputs) => void;
}
