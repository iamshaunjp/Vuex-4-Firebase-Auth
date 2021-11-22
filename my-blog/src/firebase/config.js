import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC85GJtRghlHVzTvnslFM5LQrwZ95M_0QE",
  authDomain: "vuex-firebase-auth-56704.firebaseapp.com",
  projectId: "vuex-firebase-auth-56704",
  storageBucket: "vuex-firebase-auth-56704.appspot.com",
  messagingSenderId: "345007795658",
  appId: "1:345007795658:web:7d7ad30b26830b8ce9f333"
}

// init firebase
initializeApp(firebaseConfig)

// init firebase auth
const auth = getAuth()

export { auth }