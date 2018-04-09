import View from './_View'
import * as constants from './constants'
import initData from './initData'
import reducer from './reducer'
import sagas from './sagas'

export * from './types'
export default {
  NAME: constants.NAME,
  View,
  constants,
  initData,
  reducer,
  sagas,
}
