import React from 'react';
import { SearchProps } from './Search.types';
import Box from '@mui/material/Box';
import { alpha } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import { grey } from '@mui/material/colors';

export const Search: React.FC<SearchProps> = ({ ...inputBaseProps }) => {
  return (
    <Box
      sx={ {
        py: 0.5,
        backgroundColor: theme => alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: theme => alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme => theme.shape.borderRadius,
        width: 'auto',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        border: theme => theme.palette.mode === 'light' ? `1px solid ${ grey[500] }` : '',
      } }
    >
      <Box
        sx={ {
          px: 2,
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        } }
      >
        <SearchIcon />
      </Box>
      <InputBase
        sx={ {
          pl: 6,
          width: '10em',
          '&.Mui-focused': {
            width: '18em',
          },
          transition: theme => theme.transitions.create('width'),
        } }
        placeholder={ 'Поиск...' }
        inputProps={ { 'aria-label': 'search' } }
        { ...inputBaseProps }
      />
    </Box>
  );
};
