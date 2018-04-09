import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import api, { collectErrorMessages } from '../../api'
import * as actions from './actions'
import * as constants from './constants'

// -----------------------------------------------------------------------------
// WATCH TASKS (Action Subscriptions)
// -----------------------------------------------------------------------------

export default function* saga() {
  yield [takeLatest(constants.REGISTER_REQUEST, registerUserRequestFlow)]
}

// -----------------------------------------------------------------------------
// FLOW TASKS (Action Management)
// -----------------------------------------------------------------------------

function* registerUserRequestFlow(action: actions.RegisterRequest) {
  try {
    const user = yield call(api.user.register, action.payload)

    yield put(actions.registerRequestSuccess(user, action.meta.history))
  } catch (e) {
    const errors = collectErrorMessages(e.response.data.errors)

    yield put(actions.registerRequestFailure(errors))
  }
}
