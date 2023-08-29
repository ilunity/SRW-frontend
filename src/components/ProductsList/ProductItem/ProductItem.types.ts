import { IProductData } from '@/api/interfaces/products.types';

export interface ProductItemProps {
  product: IProductData;
  updateProducts: () => void;
}
