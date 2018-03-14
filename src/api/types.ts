export interface Error {
  message: string
  response: {
    data: {
      errors: {
        message: string
      }
    }
  }
}
