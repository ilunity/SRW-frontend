import { DependencyList, useEffect, useState } from 'react';
import { ApiRequestFn, IApiError } from '@/api/utils/api.types';
import { defineAxiosError } from '@/api/utils/define-axios-error';

type IDataState<T> = T | null;

export type IStatusState = 'loading' | 'error' | 'success'

export type IErrorState = IApiError | null;

interface IRequestState<T> {
  data: IDataState<T>;
  error: IErrorState;
  status: IStatusState;
}

export const useApiRequest = <DataType>(requestFn: ApiRequestFn<DataType>, deps: DependencyList = []): IRequestState<DataType> => {
  const [state, setState] = useState<IRequestState<DataType>>({
    status: 'loading',
    error: null,
    data: null,
  });

  const request = async () => {
    setState({ status: 'loading', error: null, data: null });

    try {
      const response = await requestFn();
      const data = response.data;

      setState({ status: 'success', error: null, data });
    } catch (error: any) {
      if (!error.isAxiosError) {
        throw error;
      }

      setState({
        status: 'error',
        error: defineAxiosError(error),
        data: null,
      });
    }
  };

  useEffect(() => {
    request();
  }, deps);

  return state;
};
