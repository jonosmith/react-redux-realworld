import * as React from 'react'

export interface Props {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">{children}</div>
        </div>
      </div>
    </div>
  )
}
