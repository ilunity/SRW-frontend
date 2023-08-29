import { ProductFormInputs } from '@/components/forms/ProductForm/ProductForm.types';
import { PartialBy } from '@/utils';

export interface UpdateProductFormProps {
  onSubmit: (data: PartialBy<ProductFormInputs, 'img'>) => void;
  productName: string;
}
