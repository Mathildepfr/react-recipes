import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

import withFirebase from './hoc/withFirebase'

import ColorContext from './components/Color'

const App = ({
  match,
  recettes,
  ajouterRecette,
  majRecette,
  supprimerRecette,
  chargerExemple }) => {
  const cards = Object.keys(recettes)
    .map(key => <Card key={key} details={recettes[key]} />)

  return (
    <ColorContext>
      <div className='box'>
        <Header pseudo={match.params.pseudo} />
        <div className='cards'>
          {cards}
        </div>
        <Admin
          pseudo={match.params.pseudo}
          recettes={recettes}
          ajouterRecette={ajouterRecette}
          majRecette={majRecette}
          supprimerRecette={supprimerRecette}
          chargerExemple={chargerExemple} />
      </div>
    </ColorContext>
  )
}

App.propTypes = {
  match: PropTypes.object.isRequired,
  recettes: PropTypes.object.isRequired,
  ajouterRecette: PropTypes.func.isRequired,
  majRecette: PropTypes.func.isRequired,
  supprimerRecette: PropTypes.func.isRequired,
  chargerExemple: PropTypes.func.isRequired
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent
