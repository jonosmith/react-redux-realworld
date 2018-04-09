import { createSelector } from 'reselect'

import remoteData from '../../common/remotedata'
import { State as AppState } from '../../types'
import { User } from '../../types'
import { State } from './types'

export const data = (appState: AppState): State => appState.app.USER

export const isLoggedIn = createSelector(data, (userState: State) => {
  return remoteData.isSuccess(userState)
})

export const username = createSelector(data, (userState: State) => {
  if (!remoteData.isSuccess(userState)) {
    return undefined
  }

  const user = remoteData.getData(userState) as User

  return user.username
})
