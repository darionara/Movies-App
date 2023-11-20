import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type HeaderState = {
  activeMenuItem: string;
};

const initialState: HeaderState = {
  activeMenuItem: '',
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setActiveMenuItem: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.activeMenuItem = action.payload;
    },
  },
});

export const { setActiveMenuItem } = headerSlice.actions;

const headerReducer = headerSlice.reducer;
export default headerReducer;
