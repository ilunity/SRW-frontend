import { PartialBy } from '@/utils';

export interface ProductFormInputs {
  name: string;
  img: string;
}

export type ProductFormProps = {
  defaultName?: string;
} & ({
  isImgRequired: true;
  onSubmit: (data: ProductFormInputs) => void;
} | {
  isImgRequired: false;
  onSubmit: (data: PartialBy<ProductFormInputs, 'img'>) => void;
})
