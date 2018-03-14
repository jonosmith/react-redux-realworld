import user from './modules/user'
import home from './pages/home'

// ----------------------------------------------------------------------------
// SETUP
// ----------------------------------------------------------------------------

export default function* saga() {
  yield [home.sagas(), user.sagas()]
}
