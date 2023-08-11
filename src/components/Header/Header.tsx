import React from 'react';
import { AppBar, Button, Container, Stack, Toolbar, Typography, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { ToggleThemeButton } from '@/components/ToggleThemeButton';
import { UserInfo } from 'src/components/UserInfo';

export const Header: React.FC<HeaderProps> = () => {
  const theme = useTheme();
  const user = useSelector((state: RootState) => state.user.payload);

  return (
    <AppBar position='static' sx={ { mb: 6 } }>
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant='h4'
            noWrap
            sx={ {
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              mr: 8,
            } }
          >
            FOOD RECIPES
          </Typography>
          <Stack direction='row' spacing={ 2 }>
            <Button href='/recipes'>
              <Typography color={ theme.palette.common.white }>Рецепты</Typography>
            </Button>
          </Stack>
          <Stack
            direction={ 'row' }
            spacing={ 2 }
            alignItems={ 'center' }
            sx={ { ml: 'auto' } }
          >
            <ToggleThemeButton />
            { user &&
              <UserInfo
                user={ user }
                tooltip={ 'Профиль' }
                link={ '/profile' }
              />
            }
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
