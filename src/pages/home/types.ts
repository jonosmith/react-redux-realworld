import { State as TagsState } from './tags'

export type UiState = object
export type DataState = object

export interface State {
  POPULAR_TAGS: TagsState
  ui: UiState
  data: DataState
}
