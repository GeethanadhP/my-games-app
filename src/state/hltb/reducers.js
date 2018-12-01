import * as types from './types'

const initialState = {
  games: [],
  searching: false,
  searchText: null,
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH:
      return {
        ...state,
        searching: true,
        searchText: action.payload,
      }
    case types.SEARCH_FINISHED:
      return {
        ...state,
        searching: false,
        games: action.payload,
      }
    case types.UPDATE_SEARCH:
      return {
        ...state,
        searchText: action.payload,
      }
    default:
      return state
  }
}

export default mainReducer
