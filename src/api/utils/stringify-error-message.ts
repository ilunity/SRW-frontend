import { IApiError } from '@/api/utils/api.types';

export const stringifyErrorMessage = (error: IApiError): string => {
  return Array.isArray(error.message)
    ? error.message.reduce((previous, current) => previous + `\n${ current }`)
    : error.message;
};
