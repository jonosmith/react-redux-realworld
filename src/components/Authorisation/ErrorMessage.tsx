import * as React from 'react'

export interface Props {
  messages: string[]
}

export default function({ messages = [] }: Props) {
  const messagesList = messages.map(message => <li>{message}</li>)

  return <ul className="error-messages">{messagesList}</ul>
}
