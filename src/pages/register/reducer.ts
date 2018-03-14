import { combineReducers } from 'redux'
import initData from './initData'
import { DataState, UiState } from './types'

function dataReducer(currentState: DataState): DataState {
  const state = currentState || initData.state.data
  return state
}

function uiReducer(currentState: UiState): UiState {
  const state = currentState || initData.state.ui
  return state
}

export default combineReducers({
  data: dataReducer,
  ui: uiReducer,
})
