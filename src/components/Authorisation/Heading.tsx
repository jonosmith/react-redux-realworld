import * as React from 'react'

export interface Props {
  children: React.ReactNode
}

export default function({ children }: Props) {
  return <h1 className="text-xs-center">{children}</h1>
}
