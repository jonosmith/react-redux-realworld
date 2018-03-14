import * as React from 'react'

export interface Props {
  children: React.ReactNode
  onClick: () => any
}

export default function Button({ children, onClick, ...props }: Props) {
  return (
    <button
      className="btn btn-lg btn-primary pull-xs-right"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
