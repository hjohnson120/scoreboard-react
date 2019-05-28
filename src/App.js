import React, { Component } from 'react'
import Header from './components/Header'
import Team from './components/Team'

this.state = {
  teams: [{ score: 0 }, { score: 0 }]
}

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="side-by-side">
          <Team teamName="Team 1" />
          <Team teamName="Team 2" />
          <h1>{this.state.message}</h1>
        </main>
      </>
    )
  }
}

export default App
