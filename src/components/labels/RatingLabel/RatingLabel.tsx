import React from 'react';
import { RatingLabelProps } from './RatingLabel.types';
import { Grade } from '@mui/icons-material';
import { LabelLayout } from '@/components/labels/LabelLayout';
import { amber } from '@mui/material/colors';
import { round } from '@/utils';
import { Rating } from '@mui/material';

export const RatingLabel: React.FC<RatingLabelProps> = ({ value, expanded = false, size }) => {
  if (expanded) {
    return (
      <Rating
        readOnly
        value={ value ? Math.round(value * 2) / 2 : null }
        precision={ 0.5 }
      />
    );
  }

  return (
    <LabelLayout
      text={ `${ round(value) }` }
      icon={ <Grade sx={ { color: amber['600'] } } /> }
      size={ size }
    />
  );
};
