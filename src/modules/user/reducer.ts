import { combineReducers } from 'redux'
import * as actions from './actions'
import * as constants from './constants'
import { DataState, UiState } from './types'

const initState = {
  data: {
    user: undefined,
  },
  ui: {},
}

function dataReducer(currentState: DataState, action: actions.Action) {
  const state = currentState || initState.data

  switch (action.type) {
    case constants.CURRENT_USER_SET: {
      return {
        ...state,
        user: action.payload,
      }
    }
  }

  return state
}

function uiReducer(currentState: UiState, action: actions.Action) {
  const state = currentState || initState.ui

  switch (action.type) {
    case constants.REGISTER_REQUEST_FAILURE: {
      return {
        ...state,
        user: {},
        error: action.payload,
      }
    }
  }

  return state
}

export default combineReducers({
  data: dataReducer,
  ui: uiReducer,
})
