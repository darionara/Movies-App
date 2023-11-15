/* eslint no-param-reassign: 0 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FiltersState = {
  sliderValue: number | undefined;
  activeGenres: string[];
};

const initialState: FiltersState = {
  sliderValue: undefined,
  activeGenres: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSliderValue: (state, action: PayloadAction<number | undefined>) => {
      state.sliderValue = action.payload;
    },
    toggleGenre: (state, action: PayloadAction<string>) => {
      const genre = action.payload;
      const genreIncluded = state.activeGenres.includes(genre);
      state.activeGenres = genreIncluded
        ? state.activeGenres.filter((activeGenre) => activeGenre !== genre)
        : [...state.activeGenres, genre];
    },
  },
});

export const { setSliderValue, toggleGenre } = filtersSlice.actions;

const filtersReducer = filtersSlice.reducer;
export default filtersReducer;
