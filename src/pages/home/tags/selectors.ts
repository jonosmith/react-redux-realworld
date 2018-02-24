import { createSelector } from 'reselect'
import { State } from '../../../types'

export const tags = createSelector(
  (state: State) => state.pages.HOME.POPULAR_TAGS.data.tags,
  selectedTags => {
    return selectedTags || []
  }
)
