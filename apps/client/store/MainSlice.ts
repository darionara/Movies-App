/* eslint no-param-reassign: 0 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type MainState = {
  selected: string;
  isGrid: boolean;
};

const initialState: MainState = {
  selected: 'Rating Descending',
  isGrid: true,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    selectSortOption: (state, action: PayloadAction<string>) => {
      state.selected = action.payload;
    },
    setGridLayout: (state) => {
      state.isGrid = true;
    },
    setListLayout: (state) => {
      state.isGrid = false;
    },
  },
});

export const { selectSortOption, setGridLayout, setListLayout } =
  mainSlice.actions;

const mainReducer = mainSlice.reducer;
export default mainReducer;
