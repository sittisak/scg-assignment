import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './home-page'
import CVPage from './cv-page'


const RootContainer = () => {
  const styles = {
    root: {
      marginTop: '50px',
      marginBottom: '120px',
    },
  }

  return (
    <div style={styles.root}>
      <Route exact path='/' component={HomePage} />
      <Route path='/CV' component={CVPage} />
    </div>
  )
}

export default RootContainer
