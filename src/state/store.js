import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { hltbReducer as hltb, hltbEpic } from './hltb'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

const rootReducer = combineReducers({ hltb })
const rootEpic = combineEpics(hltbEpic)
const epicMiddleware = createEpicMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(epicMiddleware))
)

epicMiddleware.run(rootEpic)

export default store
