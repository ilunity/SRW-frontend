import { createSlice } from '@reduxjs/toolkit';
import { ThemeState } from '@/redux/slices/theme/theme-slice.types';

const initialState: ThemeState = {
  mode: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    toggleTheme: (state: ThemeState) => {
      const newMode = state.mode === 'light' ? 'dark' : 'light';
      state.mode = newMode;
    },
  },
});

const { actions, reducer } = themeSlice;

export { reducer as themeReducer };
export const { toggleTheme } = actions;
