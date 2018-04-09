import { takeLatest } from 'redux-saga'

import { ROUTE_INDEX } from './../../config'
import { RegisterRequestSuccess } from './../../modules/user/actions'
import user from '../../modules/user'

// -----------------------------------------------------------------------------
// WATCH TASKS (Action Subscriptions)
// -----------------------------------------------------------------------------

export default function* saga() {
  yield [takeLatest(user.constants.REGISTER_REQUEST_SUCCESS, navigateHome)]
}

// -----------------------------------------------------------------------------
// HELPER TASKS (Action Dispatches)
// -----------------------------------------------------------------------------

function navigateHome(action: RegisterRequestSuccess) {
  action.meta.history.push(ROUTE_INDEX)
}
