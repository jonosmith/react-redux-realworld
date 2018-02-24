import View from './_View'
import * as constants from './constants'
import reducer from './reducer'
import sagas from './sagas'
import * as select from './selectors'

export * from './types'
export default {
  NAME: constants.NAME,
  View,
  constants,
  reducer,
  sagas,
  select,
}
