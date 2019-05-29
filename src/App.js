import React, { Component } from 'react'
import Header from './components/Header'
import Team from './components/Team'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="side-by-side">
          <Team teamName="Team 1" />
          <Team teamName="Team 2" />
        </main>
      </>
    )
  }
}

export default App
