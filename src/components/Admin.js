import React, { Component } from 'react'
import AjouterRecette from './AjouterRecette'
import AdminForm from './AdminForm'
import Login from './Login'

import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'

class Admin extends Component {
  state = {
    uid: null,
    chef: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.handleAuth({ user })
      }
    })
  }

  handleAuth = async authData => {
    const box = await base.fetch(this.props.pseudo, { context: this })

    if (!box.chef) {
      await base.post(`${this.props.pseudo}/chef`, {
        data: authData.user.uid
      })
    }

    this.setState({
      uid: authData.user.uid,
      chef: box.chef || authData.user.uid
    })
  }

  authenticate = () => {
    const authProvider = new firebase.auth.FacebookAuthProvider()
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.handleAuth)
  }

  logout = async () => {
    console.log('Déconnexion')
    await firebase.auth().signOut()
    this.setState({ uid: null })
  }

  render() {
    const { recettes, ajouterRecette, majRecette, chargerExemple, supprimerRecette } = this.props

    const logout = <button onClick={this.logout}>Déconnexion</button>

    // Si l'utilisateur n'est pas connecté
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />
    }

    if (this.state.uid !== this.state.chef) {
      return (
        <div>
          <p>Tu n'es pas le chef de cette boîte !</p>
          {logout}
        </div>
      )
    }

    return (
      <div className='cards'>
        <AjouterRecette ajouterRecette={ajouterRecette} />
        {
          Object.keys(recettes)
            .map(key => <AdminForm
              key={key}
              id={key}
              majRecette={majRecette}
              supprimerRecette={supprimerRecette}
              recettes={recettes} />)
        }
        <footer>
          {logout}
          <button onClick={chargerExemple}>Remplir</button>
        </footer>
      </div>
    )
  }
}

export default Admin
