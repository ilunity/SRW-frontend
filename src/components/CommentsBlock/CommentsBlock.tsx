import React from 'react';
import { CommentsBlockProps } from './CommentsBlock.types';
import { Card, CardContent, CardHeader, Stack } from '@mui/material';
import { Comment } from '@/components/CommentsBlock/Comment';
import { CreateCommentForm } from '@/components/forms/CreateCommentForm';
import { recipesService } from '@/api/services/recipes.service';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { executeRequest } from '@/api/utils';

export const CommentsBlock: React.FC<CommentsBlockProps> = ({ comments, recipeId }) => {
  const user = useSelector((state: RootState) => state.user.payload);

  return (
    <Card
      sx={ {
        borderRadius: 3,
      } }
    >
      <CardHeader
        title={ 'Комментарии:' }
      />
      <CardContent>
        <Stack spacing={ 2 }>
          { comments.map(comment => (
            <Comment
              key={ comment.id }
              comment={ comment }
            />
          )) }
          {
            user &&
            <CreateCommentForm
              onSubmit={ async (data) => {
                const { error } = await executeRequest(() => recipesService.comment(recipeId, data));
                return error;
              } }
            />
          }
        </Stack>
      </CardContent>
    </Card>
  );
};
