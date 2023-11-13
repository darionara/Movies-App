'use client';

import { configureStore } from '@reduxjs/toolkit';

import filtersReducer, { FiltersState } from '@/store/FiltersSidebarSlice';
import headerReducer, { HeaderState } from '@/store/HeaderSlice';

export type RootState = {
  filters: FiltersState;
  header: HeaderState;
};

const reduxStore = configureStore({
  reducer: {
    filters: filtersReducer,
    header: headerReducer,
  },
});

export default reduxStore;
