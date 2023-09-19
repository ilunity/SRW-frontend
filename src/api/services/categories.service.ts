import { axiosInstance, HeadersConstructor } from '@/api/utils';
import { ApiRequestFnResponse } from '@/api/utils/api.types';
import { CreateCategoryDto, ICategory, UpdateCategoryDto } from '@/api/interfaces/categories.types';

const url = 'category/';

class CategoriesService {
  create(createCategoryDto: CreateCategoryDto): ApiRequestFnResponse<ICategory> {
    return axiosInstance.post(url, createCategoryDto, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  update(updateCategoryDto: UpdateCategoryDto): ApiRequestFnResponse<ICategory> {
    return axiosInstance.patch(url, updateCategoryDto, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  get(): ApiRequestFnResponse<ICategory[]> {
    return axiosInstance.get(url);
  }

  getOne(id: number): ApiRequestFnResponse<ICategory> {
    return axiosInstance.post(`${ url }/${ id }`);
  }
}

export const categoriesService = new CategoriesService();
