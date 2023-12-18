import { PaletteMode } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';
import { setCookie } from 'cookies-next';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: PaletteMode = 'light';

export const chanceModeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    updateMode: (state: PaletteMode, action: PayloadAction<PaletteMode>): any => {
      const newTheme = action.payload;
      setCookie('theme', newTheme);
      return newTheme;
    },
  },
});

export const { updateMode } = chanceModeSlice.actions;

export default chanceModeSlice.reducer;
