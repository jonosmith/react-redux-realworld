import * as React from 'react'
import Header from './components/Header'
import home from './pages/home'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <home.View />
      </div>
    )
  }
}

export default App
