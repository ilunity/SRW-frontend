import React from 'react';
import { CenterModalProps } from './CenterModal.types';
import { Card, CardContent, CardHeader, Modal } from '@mui/material';
import { DeleteBtn } from '@/components/icon-buttons/DeleteBtn';

export const CenterModal: React.FC<CenterModalProps> = ({ title, open, onClose, children }) => {
  return (
    <Modal
      open={ open }
      onClose={ onClose }
      sx={ {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      } }
    >
      <Card
        sx={ {
          width: {
            xs: '100%',
            sm: 500,
          },
          height: {
            xs: '100%',
            sm: 'auto',
          },
          maxHeight: {
            sm: '90vh',
          },
          overflowY: 'auto',
        } }
      >
        <CardHeader
          title={ title }
          action={ <DeleteBtn onClick={ onClose } title={ 'Закрыть' } /> }
        />
        <CardContent>
          { children }
        </CardContent>
      </Card>
    </Modal>
  );
};
