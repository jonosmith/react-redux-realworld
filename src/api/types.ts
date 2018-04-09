export interface Error {
  message: string
  response: {
    data: {
      errors: {
        [key: string]: string
      }
    }
  }
}
