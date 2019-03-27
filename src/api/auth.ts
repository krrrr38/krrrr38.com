import firebase from 'firebase/app'
import 'firebase/auth'

const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly')

export const AuthAPI = {
  createUserWithEmailAndPassword(email: string, password: string, success: () => void) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        success()
      })
      .catch(error => {
        alert(error) // tslint:disable-line
      })
  },
  signInWithGoogle(success: () => void) {
    firebase
      .auth()
      .signInWithRedirect(googleProvider)
      .then(() => {
        success()
      })
      .catch(error => {
        alert(error) // tslint:disable-line
      })
  },
  signInWithEmailAndPassword(email: string, password: string, success: () => void) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        success()
      })
      .catch(error => {
        alert(error) // tslint:disable-line
      })
  },
  signout(success: () => void) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        success()
      })
      .catch(error => {
        alert(error) // tslint:disable-line
      })
  }
}
