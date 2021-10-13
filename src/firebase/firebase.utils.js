import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyA8ED_YBTbLXZUgbCQK0xY9njZS8a6vjm0",
    authDomain: "crwn-db-a04f6.firebaseapp.com",
    projectId: "crwn-db-a04f6",
    storageBucket: "crwn-db-a04f6.appspot.com",
    messagingSenderId: "97450458701",
    appId: "1:97450458701:web:ab14f741777a62c0b36604",
    measurementId: "G-05H68BWZQM"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;