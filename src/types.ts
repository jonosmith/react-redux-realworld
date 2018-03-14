import { State as ModuleUserState } from './modules/user'
import { State as HomeState } from './pages/home'
import {
  Form as RegisterFormState,
  State as RegisterState,
} from './pages/register'

export interface State {
  app: {
    USER: ModuleUserState
    forms: {
      register: RegisterFormState
    }
  }
  pages: {
    HOME: HomeState
    REGISTER: RegisterState
  }
}
