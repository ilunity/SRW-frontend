import React from 'react';
import { ErrorAlertProps } from './ErrorAlert.types';
import { AlertSnackbar } from '@/components/AlertSnackbar';

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ errorAlertState }) => {
  const [error, setError] = errorAlertState;

  return (
    <AlertSnackbar
      isOpen={ !!error }
      severity={ 'error' }
      setIsOpen={ () => setError(null) }
      content={ error?.message }
      anchorOrigin={ {
        vertical: 'bottom',
        horizontal: 'center',
      } }
      autoHideDuration={ 5000 }
    />
  );
};
