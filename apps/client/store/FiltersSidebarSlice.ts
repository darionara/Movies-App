// ACTIONS
export const setSliderValue = (value: number) => ({
  type: 'slider/setValue',
  payload: value
})

export const setActiveGenres = (genres: string[]) => ({
  type: 'genres/setActive',
  payload: genres
})

type FiltersSidebarState = {
  sliderValue: number | undefined
  activeGenres: string[]
}

const initialState: FiltersSidebarState = {
  sliderValue: undefined,
  activeGenres: []
}

// REDUCER
function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'slider/setValue':
      return {
        ...state,
        sliderValue: action.payload
      }
    case 'genres/setActive':
      return {
        ...state,
        activeGenres: action.payload
      }
    default:
      return state
  }
}

export default filtersReducer