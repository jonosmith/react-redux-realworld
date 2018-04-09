import * as H from 'history'

import { User } from '../../types'
import * as constants from './constants'

export type Action =
  | RegisterRequest
  | RegisterRequestSuccess
  | RegisterRequestFailure
  | SetCurrentUser

// -----------------------------------------------------------------------------
// REGISTER USER REQUEST
// -----------------------------------------------------------------------------

export interface RegisterRequest {
  type: constants.REGISTER_REQUEST
  payload: {
    username: string
    email: string
    password: string
  }
  meta: {
    history: H.History
  }
}

export function registerRequest(
  {
    username,
    email,
    password,
  }: {
    username: string
    email: string
    password: string
  },
  history: H.History
): RegisterRequest {
  return {
    type: constants.REGISTER_REQUEST,
    payload: {
      email,
      password,
      username,
    },
    meta: { history },
  }
}

// -----------------------------------------------------------------------------
// REGISTER USER REQUEST (SUCCESS)
// -----------------------------------------------------------------------------

export interface RegisterRequestSuccess {
  type: constants.REGISTER_REQUEST_SUCCESS
  payload: User
  meta: {
    history: H.History
  }
}

export function registerRequestSuccess(
  user: User,
  history: H.History
): RegisterRequestSuccess {
  return {
    type: constants.REGISTER_REQUEST_SUCCESS,
    payload: user,
    meta: {
      history,
    },
  }
}

// -----------------------------------------------------------------------------
// REGISTER USER REQUEST (FAILURE)
// -----------------------------------------------------------------------------

export interface RegisterRequestFailure {
  type: constants.REGISTER_REQUEST_FAILURE
  payload: string[]
}

export function registerRequestFailure(
  error: string[]
): RegisterRequestFailure {
  return {
    type: constants.REGISTER_REQUEST_FAILURE,
    payload: error,
  }
}

// -----------------------------------------------------------------------------
// SET USER
// -----------------------------------------------------------------------------

export interface SetCurrentUser {
  type: constants.CURRENT_USER_SET
  payload: User
}

export function setCurrentUser(user?: User) {
  return {
    type: constants.CURRENT_USER_SET,
    payload: user,
  }
}
