import { createSelector } from 'reselect'
import { State } from '../../types'

export const user = createSelector(
  (state: State) => state.app.USER.data,
  value => value
)

export const errorMessage = createSelector(
  (state: State) => state.app.USER.ui.error,
  value => value
)
