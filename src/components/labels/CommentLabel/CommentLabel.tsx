import React from 'react';
import { CommentLabelProps } from './CommentLabel.types';
import CommentIcon from '@mui/icons-material/Comment';
import { Stack, Typography } from '@mui/material';

export const CommentLabel: React.FC<CommentLabelProps> = ({ value }) => {
  return (
    <Stack direction={ 'row' } spacing={ 1 }>
      <CommentIcon />
      <Typography>
        { value }
      </Typography>
    </Stack>
  );
};
