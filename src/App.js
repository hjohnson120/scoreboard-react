import React, { Component } from 'react'
import Header from './components/Header'

class App extends Component {
  state = {
    score: 0
  }

  updateScore = () => {}

  subtractOneFromScore = () => {
    console.log('button was clicked')
    score -= 1
    if (score < 0) {
      this.setState({
        score: score - 1
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
            <button>Add One</button>
            <button onClick={() => this.subtractOneFromScore()}>
              Subtract One
            </button>
          </section>
          <section className="team-2">
            <h1 className="score-2">0</h1>
            <h2>Team 2</h2>
            <button>Add One</button>
            <button>Subtract One</button>
          </section>
        </main>
      </>
    )
  }
}

export default App
