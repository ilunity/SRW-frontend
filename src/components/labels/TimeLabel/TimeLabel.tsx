import React from 'react';
import { TimeLabelProps } from './TimeLabel.types';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { LabelLayout } from '@/components/labels/LabelLayout';

export const TimeLabel: React.FC<TimeLabelProps> = ({ time, size }) => {
  return (
    <LabelLayout
      text={ `${ time } мин.` }
      icon={ <AccessTimeIcon /> }
      size={ size }
    />
  );
};
