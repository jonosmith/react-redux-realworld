import * as React from 'react'

export interface Props {
  errors: string[]
}

const ErrorMessages = ({ errors = [] }: Props) => {
  const errorMessages = errors.map(error => <li>{error}</li>)

  return <ul className="error-messages">{errorMessages}</ul>
}

export default ErrorMessages
