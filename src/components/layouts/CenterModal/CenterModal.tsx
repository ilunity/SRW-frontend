import React from 'react';
import { CenterModalProps } from './CenterModal.types';
import { Modal } from '@mui/material';

export const CenterModal: React.FC<CenterModalProps> = ({ open, onClose, children }) => {
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
      <>
        { children }
      </>
    </Modal>
  );
};
