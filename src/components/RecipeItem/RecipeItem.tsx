import React from 'react';
import { RecipeItemProps } from './RecipeItem.types';
import { Paper, Stack, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { Theme } from '@mui/system';
import { RecipeItemTitle } from '@/components/RecipeItem/RecipeItemTitle';
import { RecipeItemLabels } from '@/components/RecipeItem/RecipeItemLabels';

export const RecipeItem: React.FC<RecipeItemProps> = ({ recipe, onDelete, showStatus = false }) => {
  const mediaQuerySm: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Link href={ `/recipes/${ recipe.id }` }>
      <Paper
        variant={ 'outlined' }
        sx={ {
          p: 1,
          borderRadius: 3,
          '&:hover': { background: theme => theme.palette.action.hover },
          cursor: 'pointer',
        } }
      >
        <Stack
          direction={ {
            xs: 'column',
            md: 'row',
          } }
          spacing={ { md: 4 } }
          sx={ {
            width: '100%',
            justifyContent: {
              md: 'space-between',
            },
            alignItems: {
              xs: 'flex-end',
              md: 'center',
            },
          } }
        >
          <RecipeItemTitle recipe={ recipe } showStatus={ showStatus } />
          <RecipeItemLabels recipe={ recipe } onDelete={ onDelete } />
        </Stack>
      </Paper>
    </Link>
  );
};
