import { AxiosError } from 'axios';
import { IApiError } from '@/api/utils/api.types';

interface IErrorResponseBody {
  statusCode: number;
  message: string | string[];
  error?: string;
}

export const defineAxiosError = (error: AxiosError<IErrorResponseBody>): IApiError => {
  if (error.response) {
    const responseBody = error.response.data;

    return {
      status: responseBody.statusCode,
      message: responseBody.message,
    };
  }

  if (error.request) {
    return {
      status: 503,
      message: 'Сервер не отвечает',
    };
  }

  return {
    status: -1,
    message: 'Неизвестная ошибка',
  };
};

