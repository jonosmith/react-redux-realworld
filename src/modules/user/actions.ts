import * as constants from './constants'
import { User } from './types'

// -----------------------------------------------------------------------------
// TYPES
// -----------------------------------------------------------------------------

export type Action =
  | RegisterRequest
  | RegisterRequestSuccess
  | RegisterRequestFailure
  | SetCurrentUser

export interface RegisterRequest {
  type: constants.REGISTER_REQUEST
  payload: {
    username: string
    email: string
    password: string
  }
}

export interface RegisterRequestSuccess {
  type: constants.REGISTER_REQUEST_SUCCESS
  payload: User
}

export interface RegisterRequestFailure {
  type: constants.REGISTER_REQUEST_FAILURE
  payload: User
}

export interface SetCurrentUser {
  type: constants.CURRENT_USER_SET
  payload: User
}

// -----------------------------------------------------------------------------
// ACTIONS
// -----------------------------------------------------------------------------

/**
 * Triggers call to register the user
 */
export function registerRequest({
  username,
  email,
  password,
}: {
  username: string
  email: string
  password: string
}) {
  return {
    type: constants.REGISTER_REQUEST,
    payload: {
      email,
      password,
      username,
    },
  }
}

export function registerRequestSuccess(user: User) {
  return {
    type: constants.REGISTER_REQUEST_SUCCESS,
    payload: user,
  }
}

export function registerRequestFailure(error: string) {
  return {
    type: constants.REGISTER_REQUEST_FAILURE,
    payload: error,
  }
}

export function setCurrentUser(user?: User) {
  return {
    type: constants.CURRENT_USER_SET,
    payload: user,
  }
}
