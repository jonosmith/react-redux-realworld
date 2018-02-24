export type UiState = object

export interface DataState {
  tags: string[]
}

export interface State {
  ui: UiState
  data: DataState
}
