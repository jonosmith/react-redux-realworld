import * as React from 'react'
import { Dispatch, connect } from 'react-redux'
import user, { Action as UserAction } from '../../modules/user'
import { State } from '../../types'
import Register from './components/Register'
// import * as select from './selectors'
import { Form } from './types'

interface Props {
  actions: {
    registerUser: (formData: Form) => any
  }
  errorMessage?: string
  formData: Form
}

const RegisterView = ({ actions, errorMessage, formData }: Props) => {
  return (
    <Register
      errorMessage={errorMessage}
      onRegisterClick={() => actions.registerUser(formData)}
    />
  )
}

// -----------------------------------------------------------------------------
// CONNECT TO STATE
// -----------------------------------------------------------------------------

const mapStateToProps = (state: State) => {
  console.log(state) // tslint:disable-line
  return {
    formData: state.app.forms.register,
    errorMessage: state.app.USER.ui.error,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => {
  return {
    actions: {
      registerUser: (formData: Form) => {
        dispatch(user.actions.registerRequest(formData))
      },
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView)
