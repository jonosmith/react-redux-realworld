import * as React from 'react'

export interface Props {
  children: React.ReactNode
}

export default function NavLinks({ children }: Props) {
  return <ul className="nav navbar-nav pull-xs-right">{children}</ul>
}
