import { createSelector } from 'reselect'
import { State } from '../../types'

export const formData = createSelector(
  (state: State) => state.app.forms.register,
  data => {
    return data
  }
)
