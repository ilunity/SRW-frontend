import React from 'react';
import { AlertSnackbarProps } from './AlertSnackbar.types';
import { Alert, IconButton, Snackbar, Typography } from '@mui/material';
import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon';
import { isString } from 'next/dist/build/webpack/plugins/jsconfig-paths-plugin';
import { v4 as uuid4 } from 'uuid';

export const AlertSnackbar: React.FC<AlertSnackbarProps> = (
  {
    isOpen,
    setIsOpen,
    severity,
    content,
    anchorOrigin,
    autoHideDuration,
  },
) => {
  const serializeContent = (content?: string | string[]) => {
    if (!content) {
      return 'Непредвиденная ошибка';
    }

    if (isString(content)) {
      return content;
    }

    return content.map((contentString) => (
      <Typography key={ uuid4() }>
        { contentString }
      </Typography>
    ));
  };

  return (
    <Snackbar
      open={ isOpen }
      onClose={ () => setIsOpen(false) }
      anchorOrigin={ anchorOrigin }
      autoHideDuration={ autoHideDuration }
    >
      <Alert
        severity={ severity }
        action={
          <IconButton
            aria-label='close'
            size='small'
            onClick={ () => {
              setIsOpen(false);
            } }
          >
            <CloseIcon />
          </IconButton>
        }
      >
        { serializeContent(content) }
      </Alert>
    </Snackbar>
  );
};
