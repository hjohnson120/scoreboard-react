import React, { Component } from 'react'
import Header from './components/Header'

let score1 = 0
let score2 = 0

class App extends Component {
  state = {
    score1: 0,
    score2: 0
  }

  updateScore1 = newScore => {
    if (newScore >= 0) {
      this.setState({
        score1: newScore
      })
    }
  }

  updateScore2 = newScore => {
    if (newScore >= 0) {
      this.setState({
        score2: newScore
      })
    }
  }

  render() {
    return (
      <>
        <Header />
        <main className="side-by-side">
          <section className="team-1">
            <h1>{this.state.score1}</h1>
            <h2>Team 1</h2>
            <button onClick={() => this.updateScore1(this.state.score1 + 1)}>
              Add One
            </button>
            <button onClick={() => this.updateScore1(this.state.score1 - 1)}>
              Subtract One
            </button>
          </section>
          <section className="team-2">
            <h1>{this.state.score2}</h1>
            <h2>Team 2</h2>
            <button onClick={() => this.updateScore2(this.state.score2 + 1)}>
              Add One
            </button>
            <button onClick={() => this.updateScore2(this.state.score2 - 1)}>
              Subtract One
            </button>
          </section>
        </main>
      </>
    )
  }
}

export default App
