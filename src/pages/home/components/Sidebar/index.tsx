import * as React from 'react'

export interface Props {
  children?: React.ReactNode
}

export default function Sidebar({ children }: Props) {
  return (
    <div className="col-md-3">
      <div className="sidebar">{children}</div>
    </div>
  )
}
