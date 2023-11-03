import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type HeaderState = {
  activeMenuItem: string
  isDropdownOpen: boolean
}

const initialState: HeaderState = {
  activeMenuItem: 'Movies',
  isDropdownOpen: false,
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setActiveMenuItem: (state, action: PayloadAction<string>) => {
      state.activeMenuItem = action.payload
    },
    closeDropdown: (state) => {
      state.isDropdownOpen = false
    },
    setIsDropdownOpen: (state, action: PayloadAction<boolean>) => {
      state.isDropdownOpen = action.payload
    },
  },
})

export const { setActiveMenuItem, closeDropdown, setIsDropdownOpen } =
  headerSlice.actions

const headerReducer = headerSlice.reducer
export default headerReducer
