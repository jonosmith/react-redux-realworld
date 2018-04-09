export type RemoteData<Error, Data> =
  | NotAsked
  | Loading
  | Failure<Error>
  | Success<Data>

export const NOT_ASKED = 'NOT_ASKED'
export type NOT_ASKED = typeof NOT_ASKED

export const LOADING = 'LOADING'
export type LOADING = typeof LOADING

export const FAILURE = 'FAILURE'
export type FAILURE = typeof FAILURE

export const SUCCESS = 'SUCCESS'
export type SUCCESS = typeof SUCCESS

export interface NotAsked {
  status: NOT_ASKED
}

export interface Loading {
  status: LOADING
}

export interface Failure<Error> {
  status: FAILURE
  error: Error
}

export interface Success<Data> {
  status: SUCCESS
  data: Data
}

// ----------------------------------------------------------------------------
// HELPERS
// ----------------------------------------------------------------------------

export const success = (data: any): Success<any> => ({
  status: SUCCESS,
  data,
})

export const failure = (error: any): Failure<any> => ({
  status: FAILURE,
  error,
})

export const notAsked = (): NotAsked => ({
  status: NOT_ASKED,
})

export const loading = (): Loading => ({
  status: LOADING,
})

export const isSuccess = (remoteData: RemoteData<any, any>): boolean =>
  remoteData.status === SUCCESS

export const isFailure = (remoteData: RemoteData<any, any>): boolean =>
  remoteData.status === FAILURE

export const isLoading = (remoteData: RemoteData<any, any>): boolean =>
  remoteData.status === LOADING

export const isNotAsked = (remoteData: RemoteData<any, any>): boolean =>
  remoteData.status === NOT_ASKED

export const getData = (remoteData: RemoteData<any, any>) =>
  remoteData.status === SUCCESS ? remoteData.data : undefined

export const getError = (remoteData: RemoteData<any, any>) =>
  remoteData.status === FAILURE ? remoteData.error : undefined

export default {
  NOT_ASKED,
  LOADING,
  FAILURE,
  SUCCESS,
  success,
  failure,
  notAsked,
  loading,
  isSuccess,
  isFailure,
  isLoading,
  isNotAsked,
  getData,
  getError,
}
