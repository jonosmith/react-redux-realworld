import { combineReducers } from 'redux'
import tags from './tags'
import { DataState, UiState } from './types'

const initState = {
  data: {},
  ui: {},
}

function dataReducer(currentState: DataState): DataState {
  const state = currentState || initState.data
  return state
}

function uiReducer(currentState: UiState): UiState {
  const state = currentState || initState.ui
  return state
}

export default combineReducers({
  [tags.NAME]: tags.reducer,
  data: dataReducer,
  ui: uiReducer,
})
