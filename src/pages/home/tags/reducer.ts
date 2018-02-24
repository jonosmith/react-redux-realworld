import { combineReducers } from 'redux'
import { Action } from './actions'
import { SET_TAGS } from './constants'
import { DataState, UiState } from './types'

const initState = {
  data: {},
  ui: {},
}

function dataReducer(currentState: DataState, action: Action): DataState {
  const state = currentState || initState.data

  switch (action.type) {
    case SET_TAGS: {
      return {
        ...state,
        tags: action.payload.tags,
      }
    }
  }

  return state
}

function uiReducer(currentState: UiState): UiState {
  const state = currentState || initState.ui
  return state
}

export default combineReducers({
  data: dataReducer,
  ui: uiReducer,
})
