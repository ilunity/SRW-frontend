import { IApiError } from '@/api/utils/api.types';
import React from 'react';

export type ErrorAlertState = [(IApiError | null), React.Dispatch<React.SetStateAction<IApiError | null>>];

export interface ErrorAlertProps {
  errorAlertState: ErrorAlertState;
}
