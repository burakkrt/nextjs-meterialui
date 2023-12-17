import { PaletteMode } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';
import { getCookie, setCookie } from 'cookies-next';

const initialState: PaletteMode = (getCookie('theme') as PaletteMode) || 'dark';

export const chanceModeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    changeMode: (state: PaletteMode): any => {
      const newTheme = state === 'dark' ? 'light' : 'dark';
      setCookie('theme', newTheme);
      return newTheme;
    },
  },
});

export const { changeMode } = chanceModeSlice.actions;

export default chanceModeSlice.reducer;
