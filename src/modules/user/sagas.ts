import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import api from '../../api'
// import { User } from './types'
// import { Error as ApiError } from '../../api/types'
import * as actions from './actions'
import * as constants from './constants'

// -----------------------------------------------------------------------------
// WATCH TASKS (Action Subscriptions)
// -----------------------------------------------------------------------------

export default function* saga() {
  yield [
    takeLatest(constants.REGISTER_REQUEST_SUCCESS, setCurrentUser),
    takeLatest(constants.REGISTER_REQUEST, registerUserRequestFlow),
  ]
}

// -----------------------------------------------------------------------------
// FLOW TASKS (Action Management)
// -----------------------------------------------------------------------------

function* registerUserRequestFlow(action: actions.RegisterRequest) {
  try {
    const user = yield call(api.user.register, action.payload)

    yield put(actions.registerRequestSuccess(user))
  } catch (e) {
    const errorMessage = e.response.data.errors.message

    yield put(actions.registerRequestFailure(errorMessage))
    console.error(e) // tslint:disable-line
  }
}

// -----------------------------------------------------------------------------
// HELPER TASKS (Action Dispatches)
// -----------------------------------------------------------------------------

function* setCurrentUser(action: actions.RegisterRequestSuccess) {
  yield put(actions.setCurrentUser(action.payload))
}
