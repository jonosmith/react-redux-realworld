import * as React from 'react'

export interface Props {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <nav className="navbar navbar-light">
      <div className="container">{children}</div>
    </nav>
  )
}
