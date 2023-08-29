import { IProductData } from '@/api/interfaces/products.types';

export interface ProductsListProps {
  query: string;
  products: IProductData[];
  updateProducts: () => void;
}
