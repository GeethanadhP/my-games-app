import { combineEpics, ofType } from 'redux-observable'

import * as types from './types'
import * as actions from './actions'
import { debounceTime, map, switchMap } from 'rxjs/operators'
import HLTBService from '../../services/HLTBService'

const updateSearch = action$ =>
  action$.pipe(
    ofType(types.UPDATE_SEARCH),
    map(action => actions.search(action.payload))
  )

const runSearch = action$ =>
  action$.pipe(
    ofType(types.SEARCH),
    debounceTime(500),
    switchMap(action => HLTBService.search(action.payload)),
    map(games => actions.searchFinished(games))
  )

export default combineEpics(updateSearch, runSearch)
