import { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './app.styles.scss'
import {Header} from './components/header'
import {Home} from './pages/home'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    )  
  }
}

export default App
