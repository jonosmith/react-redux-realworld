export interface User {
  email: string
  token: string
  username: string
  bio: string
  image?: string
}

export interface DataState {
  user?: User
}

export interface UiState {
  error?: string
}

export interface State {
  data: DataState
  ui: UiState
}
