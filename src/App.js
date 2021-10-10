import React, { Component } from 'react'
// CSS
import './App.css'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo
  }

  render () {
    return (
      <div className='box'>
        <h1>Bonjour {this.state.pseudo}</h1>
        <div className='cards'>
          <div className='card'>
            <h2>Une Carte</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default App
