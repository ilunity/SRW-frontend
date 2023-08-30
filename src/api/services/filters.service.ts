import { axiosInstance, HeadersConstructor } from '@/api/utils';
import { ApiRequestFnResponse } from '@/api/utils/api.types';
import { CreateFilterDto, GetOneParams, IFiltersData, UpdateFilterDto } from '@/api/interfaces/filters.types';

const url = 'filter/';

class FiltersService {
  create(createFilterDto: CreateFilterDto): ApiRequestFnResponse<IFiltersData> {
    return axiosInstance.post(url, createFilterDto, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  update(updateFilterDto: UpdateFilterDto): ApiRequestFnResponse<IFiltersData> {
    return axiosInstance.patch(url, updateFilterDto, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  get(): ApiRequestFnResponse<IFiltersData[]> {
    return axiosInstance.get(url);
  }

  getOne({ id, filters_keys }: GetOneParams): ApiRequestFnResponse<IFiltersData> {
    if (id) {
      return axiosInstance.post(`${ url }/search`, { id });
    }

    return axiosInstance.post(`${ url }/search`, { filters_keys });
  }
}

export const filtersService = new FiltersService();
