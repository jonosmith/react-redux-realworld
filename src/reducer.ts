import { combineForms } from 'react-redux-form'
import { combineReducers } from 'redux'
import user from './modules/user'
import home from './pages/home'
import register from './pages/register'
// import { State } from './types'

// const initState = {
//   app: {},
//   pages: {},
// }

const appReducer = combineReducers({
  USER: user.reducer,
  forms: combineForms(
    {
      register: register.initData.form,
    },
    'app.forms'
  ),
})

const pagesReducer = combineReducers({
  HOME: home.reducer,
  REGISTER: register.reducer,
})

export default combineReducers({
  app: appReducer,
  pages: pagesReducer,
})
