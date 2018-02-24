import { takeLatest } from 'redux-saga'
import { put } from 'redux-saga/effects'
import api from '../../../api'
import * as actions from './actions'
import * as constants from './constants'

// -----------------------------------------------------------------------------
// SETUP (Default Export)
// -----------------------------------------------------------------------------

export default function* sagas() {
  yield [watch()]
}

// -----------------------------------------------------------------------------
// WATCH TASKS (Action Subscriptions)
// -----------------------------------------------------------------------------

function* watch() {
  yield [takeLatest(constants.FETCH_TAGS, fetchTagsFlow)]
}

// -----------------------------------------------------------------------------
// FLOW TASKS (Action Management)
// -----------------------------------------------------------------------------

function* fetchTagsFlow() {
  try {
    const fetchedTags = yield api.tags.fetch()
    console.log(fetchedTags) // tslint:disable-line

    yield put(actions.setTags(['JavaScript', 'TypeScript']))
  } catch (error) {
    console.error(error) // tslint:disable-line
  }
}

// -----------------------------------------------------------------------------
// HELPER TASKS (Action Dispatches)
// -----------------------------------------------------------------------------
