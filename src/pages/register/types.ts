export type UiState = object
export type DataState = object

export interface State {
  ui: UiState
  data: DataState
  forms: object
}

export interface Form {
  username: string
  email: string
  password: string
}
