import * as React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children: React.ReactNode
  route: string
}

export default function SubHeadingLink({ children, route }: Props) {
  return (
    <p className="text-xs-center">
      <Link to={route}>{children}</Link>
    </p>
  )
}
