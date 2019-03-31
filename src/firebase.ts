import firebase from 'firebase'
import 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
}

export default {
  initializeApp: () => {
    firebase.initializeApp(firebaseConfig)
  },
  onAuthStateChanged: (observer: (a: firebase.User | null) => any) => {
    firebase.auth().onAuthStateChanged(observer)
  }
}
