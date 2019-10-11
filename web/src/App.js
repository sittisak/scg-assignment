import React from 'react'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router } from 'react-router-dom'
import RootContainer from './components/root-container'
import Header from './components/header'
import Footer from './components/footer'


const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <RootContainer />
      </Container>
      <Footer />
    </Router>
  )
}

export default App
