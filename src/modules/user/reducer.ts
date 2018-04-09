import * as remoteData from '../../common/remotedata'
import * as actions from './actions'
import * as constants from './constants'
import { State } from './types'

const initState = remoteData.notAsked()

const reducer = (currentState: State, action: actions.Action): State => {
  const state = currentState || initState

  switch (action.type) {
    case constants.REGISTER_REQUEST: {
      return remoteData.loading()
    }

    case constants.REGISTER_REQUEST_SUCCESS: {
      return remoteData.success(action.payload)
    }

    case constants.REGISTER_REQUEST_FAILURE: {
      return remoteData.failure(action.payload)
    }
  }

  return state
}

export default reducer
