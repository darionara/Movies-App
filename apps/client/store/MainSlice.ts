/* eslint no-param-reassign: 0 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortingOptions } from 'common-types';

export type MainState = {
  selected: SortingOptions;
  isGrid: boolean;
};

const initialState: MainState = {
  selected: 'popularity.desc',
  isGrid: true,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    selectSortOption: (state, action: PayloadAction<SortingOptions>) => {
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
