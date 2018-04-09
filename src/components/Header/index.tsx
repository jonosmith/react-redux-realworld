import * as React from 'react'

import { APP_NAME, ROUTE_INDEX, ROUTE_REGISTER } from '../../config'
import Brand from './components/Brand'
import Container from './components/Container'
import NavLink from './components/NavLink'
import NavLinks from './components/NavLinks'

export interface Props {
  isLoggedIn: boolean
  username?: string
  onLogoutClick: () => any
}

export default function Header({ isLoggedIn, username, onLogoutClick }: Props) {
  return (
    <Container>
      <Brand route={ROUTE_INDEX}>{APP_NAME}</Brand>
      <NavLinks>
        <NavLink active route={ROUTE_INDEX}>
          Home
        </NavLink>
        {(() => {
          if (isLoggedIn) {
            return (
              <li className="nav-item">
                <a className="nav-link">{username}</a>
              </li>
            )
          }

          return <NavLink route={ROUTE_REGISTER}>Register</NavLink>
        })()}
      </NavLinks>
    </Container>
  )
}
