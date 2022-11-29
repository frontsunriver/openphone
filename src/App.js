import { Component } from 'react'

import Logo from './assets/altafino.svg'
import './app.styles.scss'
import { Header } from './components/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    )  }
}

export default App
