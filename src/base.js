import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDpopiRlIxjIZ_T_BgQLhiqAli_pmpXXNg",
  authDomain: "react-recipes-28029.firebaseapp.com",
  databaseURL: "https://react-recipes-28029-default-rtdb.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
