import React from 'react';
import { CommentProps } from './Comment.types';
import { Card, CardContent, CardHeader, Divider, Stack, Typography } from '@mui/material';
import { UserInfo } from '@/components/UserInfo';
import { format } from 'date-fns';

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <Card
      variant={ 'outlined' }
      sx={ {
        borderRadius: 3,
      } }
    >
      <CardHeader
        sx={ {
          pb: 0,
        } }
        title={
          <Stack
            direction={ 'row' }
            divider={ <Divider orientation={ 'vertical' } flexItem /> }
            spacing={ 2 }
            alignItems={ 'center' }
          >
            <UserInfo user={ comment.user } tooltip={ comment.user.username } size={ 'small' } />
            <Typography variant={ 'caption' }>
              { format(new Date(comment.updatedAt),
                `dd MMM yyyy HH:mm
                ${ comment.createdAt !== comment.updatedAt ? ' (изменено)' : '' }`,
              ) }
            </Typography>
          </Stack>
        }
      />
      <CardContent sx={ { '&:last-child': { p: 2 } } }>
        <Typography
          variant={ 'body2' }
          component={ 'pre' }
          sx={ {
            whiteSpace: 'pre-wrap',
          } }
        >
          { comment.text }
        </Typography>
      </CardContent>
    </Card>
  );
};
