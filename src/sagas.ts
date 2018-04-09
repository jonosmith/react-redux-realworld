import user from './modules/user'
import home from './pages/home'
import register from './pages/register'

// ----------------------------------------------------------------------------
// SETUP
// ----------------------------------------------------------------------------

export default function* saga() {
  yield [home.sagas(), register.sagas(), user.sagas()]
}
