import * as React from 'react'

export interface Props {
  children: React.ReactNode
}

export default function Fieldset({ children, ...props }: Props) {
  return (
    <fieldset className="form-group" {...props}>
      {children}
    </fieldset>
  )
}
