// ACTIONS
export const setActiveMenuItem = (menuItem: string) => ({
  type: 'menuItem/setActive',
  payload: menuItem,
})

export const closeDropdown = () => ({
  type: 'menuItem/closeDropdown',
})

export const setIsDropdownOpen = (isOpen: boolean) => ({
  type: 'menuItem/setIsOpen',
  payload: isOpen
})

type HeaderState = {
  activeMenuItem: string
  isDropdownOpen: boolean
}

const initialState: HeaderState = {
  activeMenuItem: 'Movies',
  isDropdownOpen: false,
}

// REDUCER
function headerReducer(state = initialState, action) {
  switch (action.type) {
    case 'menuItem/setActive':
      return { 
        ...state, 
        activeMenuItem: action.payload 
      }
    case 'menuItem/closeDropdown': 
      return {
        ...state,
        isDropdownOpen: false
      }
    case 'menuItem/setIsOpen':
      return {
        ...state,
        isDropdownOpen: action.payload
      }
      default:
        return state
  }
}

export default headerReducer
