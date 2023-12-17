import { PaletteMode } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

const initialState: PaletteMode = 'light';

export const chanceModeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    changeMode: (state: PaletteMode): any => {
      return state === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { changeMode } = chanceModeSlice.actions;

export default chanceModeSlice.reducer;
