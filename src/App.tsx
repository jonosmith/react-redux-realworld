import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import { ROUTE_INDEX, ROUTE_LOGIN, ROUTE_REGISTER } from './config'
import home from './pages/home'
import login from './pages/login'
import register from './pages/register'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

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

export default App
