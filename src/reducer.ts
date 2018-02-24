import { combineReducers } from 'redux'
import home from './pages/home'
// import { State } from './types'

// const initState = {
//   app: {},
//   pages: {},
// }

function appReducer(currentState: object) {
  const state = {}

  return state
}

const pagesReducer = combineReducers({
  HOME: home.reducer,
})

export default combineReducers({
  app: appReducer,
  pages: pagesReducer,
})
