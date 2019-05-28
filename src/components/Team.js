import React, { Component } from 'react'

class Team extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      teamName: props.teamName
    }
  }

  updateScore = newScore => {
    if (newScore >= 0 && newScore <= 21) {
      this.setState({
        score: newScore,
        message: ''
      })
    }
  }

  render() {
    return (
      <>
        <section className="team">
          <h1>{this.state.score}</h1>
          <h2>{this.state.teamName}</h2>
          <button onClick={e => this.updateScore(this.state.score + 1)}>
            Add One
          </button>
          <button onClick={e => this.updateScore(this.state.score - 1)}>
            Subtract One
          </button>
        </section>
      </>
    )
  }
}

export default Team
