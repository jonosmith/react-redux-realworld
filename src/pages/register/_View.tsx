import * as H from 'history'
import * as React from 'react'
import { Dispatch, connect } from 'react-redux'

import user, {
  Action as UserAction,
  State as UserState,
} from '../../modules/user'
import { State } from '../../types'
import Register from './components/Register'
import { Form } from './types'

interface Props {
  actions: {
    registerUser: (formData: Form) => any
  }
  history: H.History
  userState: UserState
  formData: Form
}

const RegisterView = ({ actions, userState: userState, formData }: Props) => {
  const handleRegisterClick = () => actions.registerUser(formData)

  return (
    <Register userState={userState} onRegisterClick={handleRegisterClick} />
  )
}

// -----------------------------------------------------------------------------
// CONNECT TO STATE
// -----------------------------------------------------------------------------

const mapStateToProps = (state: State) => {
  return {
    formData: state.app.forms.register,
    userState: user.select.data(state),
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch<UserAction>,
  ownProps: Props
) => {
  return {
    actions: {
      registerUser: (formData: Form) => {
        dispatch(user.actions.registerRequest(formData, ownProps.history))
      },
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView)
