import React from 'react';
import { CommentLabelProps } from './CommentLabel.types';
import CommentIcon from '@mui/icons-material/Comment';
import { LabelLayout } from '@/components/labels/LabelLayout';

export const CommentLabel: React.FC<CommentLabelProps> = ({ value, size }) => {
  return (
    <LabelLayout
      text={ `${ value }` }
      icon={ <CommentIcon /> }
      size={ size }
    />
  );
};
