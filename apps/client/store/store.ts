'use client';

import { configureStore } from '@reduxjs/toolkit';

import filtersReducer, { FiltersState } from '@/store/FiltersSidebarSlice';
import headerReducer, { HeaderState } from '@/store/HeaderSlice';
import mainReducer, { MainState } from '@/store/MainSlice';

export type RootState = {
  filters: FiltersState;
  header: HeaderState;
  main: MainState;
};

const reduxStore = configureStore({
  reducer: {
    filters: filtersReducer,
    header: headerReducer,
    main: mainReducer,
  },
});

export default reduxStore;
