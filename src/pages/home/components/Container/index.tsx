import * as React from 'react'

export interface Props {
  children?: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div className="container page">
      <div className="row">{children}</div>
    </div>
  )
}
