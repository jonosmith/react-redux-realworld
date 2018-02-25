import * as React from 'react'

export interface Props {
  children: React.ReactNode
  route: string
}

export default function Brand({ children, route }: Props) {
  return (
    <a className="navbar-brand" href={route}>
      {children}
    </a>
  )
}
