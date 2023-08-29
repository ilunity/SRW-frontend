import { ApiRequestFnResponse } from '@/api/utils/api.types';
import { axiosInstance, HeadersConstructor } from '@/api/utils';
import { CreateProductDto, IProductData, UpdateProductDto } from '@/api/interfaces/products.types';

const url = axiosInstance.defaults.baseURL + 'product/';

class ProductsService {
  get(): ApiRequestFnResponse<IProductData[]> {
    return axiosInstance.get(url);
  }

  create(createProductDto: CreateProductDto): ApiRequestFnResponse<IProductData> {
    return axiosInstance.post(url, createProductDto,{
      headers: new HeadersConstructor().authorization(),
    });
  }

  update(updateProductDto: UpdateProductDto): ApiRequestFnResponse<IProductData> {
    return axiosInstance.patch(url, updateProductDto, {
      headers: new HeadersConstructor().authorization(),
    });
  }
}

export const productsService = new ProductsService();
