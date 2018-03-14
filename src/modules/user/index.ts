import * as actions from './actions'
import * as constants from './constants'
import reducer from './reducer'
import sagas from './sagas'
import * as select from './selectors'

export * from './types'
export { Action } from './actions'
export default {
  NAME: constants.NAME,
  actions,
  constants,
  reducer,
  sagas,
  select,
}
