import React from 'react'
import { Redirect } from 'react-router-dom'

import illuTacos from '../assets/tacos.png';

class Connexion extends React.Component {
  state = {
    pseudo: '',
    goToApp: false
  }

  goToApp = event => {
    event.preventDefault()
    this.setState({ goToApp: true })
  }

  handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
  }

  render () {
    if (this.state.goToApp) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
    }

    return (
      <div className='connexionBox'>
        <img src={illuTacos} alt='Tacos' />
        <form className='connexion' onSubmit={this.goToApp} >
          <h1>Let's create recipes</h1>
          <input
            type='text'
            value={this.state.pseudo}
            onChange={this.handleChange}
            placeholder="What's your name?"
            pattern='[A-Za-z-]{1,}'
            required />
          {/* <p>No special characters</p> */}
          <button type='submit'>GO</button>
        </form>
      </div>
    )
  }
}

export default Connexion
