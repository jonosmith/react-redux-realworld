import * as React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from '../../../common/utils'

export interface Props {
  active?: boolean
  children: React.ReactNode
  route: string
}

export default function NavLink({ route, active = false, children }: Props) {
  const linkClassname = classNames('nav-link', { active })

  return (
    <li className="nav-item">
      <Link to={route} className={linkClassname}>
        {children}
      </Link>
    </li>
  )
}
