import * as React from 'react'

export interface Props {
  name: string
}

export default function TagPill({ name }: Props) {
  return (
    <a href="" className="tag-pill tag-default">
      {name}
    </a>
  )
}
