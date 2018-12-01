import * as types from './types'

export const search = searchText => ({
  type: types.SEARCH,
  payload: searchText,
})

export const searchFinished = games => ({
  type: types.SEARCH_FINISHED,
  payload: games,
})

export const updateSearch = searchText => ({
  type: types.UPDATE_SEARCH,
  payload: searchText,
})
