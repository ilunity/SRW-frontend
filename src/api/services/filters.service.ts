import { axiosInstance } from '@/api/utils';
import { ApiRequestFnResponse } from '@/api/utils/api.types';
import { GetOneParams, IFiltersData } from '@/api/interfaces/filters.types';

class FiltersService {
  get(): ApiRequestFnResponse<IFiltersData[]> {
    return axiosInstance.get('filter');
  }

  getOne({ id, filters_keys }: GetOneParams): ApiRequestFnResponse<IFiltersData> {
    if (id) {
      return axiosInstance.post('filter/search', { id });
    }

    return axiosInstance.post('filter/search', { filters_keys });
  }
}

export const filtersService = new FiltersService();
