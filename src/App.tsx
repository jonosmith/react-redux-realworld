import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import { ROUTE_INDEX, ROUTE_LOGIN, ROUTE_REGISTER } from './config'
import user from './modules/user'
import home from './pages/home'
import login from './pages/login'
import register from './pages/register'
import { State } from './types'

export interface Props {
  isLoggedIn: boolean
  username: string
}

class App extends React.Component<Props> {
  render() {
    return (
      <div>
        <Header
          onLogoutClick={() => undefined}
          username={this.props.username}
          isLoggedIn={this.props.isLoggedIn}
        />

        <Switch>
          <Route exact path={ROUTE_INDEX} component={home.View} />
          <Route path={ROUTE_LOGIN} component={login.View} />
          <Route path={ROUTE_REGISTER} component={register.View} />

          <Redirect to={ROUTE_INDEX} />
        </Switch>
      </div>
    )
  }
}

// -----------------------------------------------------------------------------
// CONNECT TO STATE
// -----------------------------------------------------------------------------

const mapStateToProps = (state: State) => {
  return {
    isLoggedIn: user.select.isLoggedIn(state),
    username: user.select.username(state),
  }
}

export default connect(mapStateToProps)(App)
