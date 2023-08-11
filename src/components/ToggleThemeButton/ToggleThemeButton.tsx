import React from 'react';
import { toggleTheme } from '@/redux/slices';
import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeSwitch = styled(Switch)(() => ({
  '.MuiSwitch-switchBase': {
    padding: 4,
    '& svg': {
      width: '30px',
      height: '30px',
    },
  },
}));


export const ToggleThemeButton: React.FC = () => {
  const { mode } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    <ThemeSwitch
      checked={ mode === 'dark' }
      onChange={ () => dispatch(toggleTheme()) }
      icon={ <LightModeIcon /> }
      checkedIcon={ <DarkModeIcon /> }
    />
  );
};
