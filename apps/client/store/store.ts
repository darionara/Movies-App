'use client'
import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from '@/store/FiltersSidebarSlice'
import headerReducer from '@/store/HeaderSlice'

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    header: headerReducer
  },
})

export default store
