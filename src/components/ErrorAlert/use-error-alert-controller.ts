import { ApiRequestFn, IApiError } from '@/api/utils/api.types';
import { useState } from 'react';
import { executeRequest } from '@/api/utils';
import { ErrorAlertState } from '@/components/ErrorAlert/ErrorAlert.types';

export interface IErrorAlertController<DataType> {
  requestFn: (data: DataType) => ApiRequestFn<any>;
  onSuccess?: () => void;
}

export interface ErrorAlertControllerReturn<DataType> {
  errorAlertState: ErrorAlertState;
  submitHandler: (data: DataType) => void;
}

export const useErrorAlertController = <DataType>({ requestFn, onSuccess }: IErrorAlertController<DataType>): ErrorAlertControllerReturn<DataType> => {
  const [requestError, setRequestError] = useState<IApiError | null>(null);

  const submitHandler = async (data: DataType) => {
    const { success, error } = await executeRequest(requestFn(data));

    setRequestError(error);
    if (success) {
      if (onSuccess) {
        onSuccess();
      }
    }
  };

  return {
    errorAlertState: [requestError, setRequestError],
    submitHandler,
  };
};
