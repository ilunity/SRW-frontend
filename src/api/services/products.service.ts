import { ApiRequestFnResponse } from '@/api/utils/api.types';
import { axiosInstance } from '@/api/utils';
import { IProductData } from '@/api/interfaces/products.types';

class ProductsService {
  get(): ApiRequestFnResponse<IProductData[]> {
    return axiosInstance.get('product');
  }
}

export const productsService = new ProductsService();
