import React from 'react';
import { ServingsNumberLabelProps } from './ServingsNumberLabel.types';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { LabelLayout } from '@/components/labels/LabelLayout';

export const ServingsNumberLabel: React.FC<ServingsNumberLabelProps> = ({ servingsNumber, size }) => {
  return (
    <LabelLayout
      text={ `${ servingsNumber } порц.` }
      icon={ <LocalDiningIcon /> }
      size={ size }
    />
  );
};
