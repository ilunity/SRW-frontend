import { ApiRequestFn, IApiError } from '@/api/utils/api.types';
import { defineAxiosError } from '@/api/utils/define-axios-error';

type IApiResponse<DataType> = {
  data: DataType;
  error: null;
  success: true;
} | {
  data: null;
  error: IApiError;
  success: false;
}

export const executeRequest = async <DataType>(requestFn: ApiRequestFn<DataType>): Promise<IApiResponse<DataType>> => {
  try {
    const response = await requestFn();
    return {
      data: response.data,
      error: null,
      success: true,
    };
  } catch (error: any) {
    return {
      data: null,
      error: defineAxiosError(error),
      success: false,
    };
  }
};
