import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config={
 
  apiKey: "AIzaSyC4CdNYOShpFkZjPzuJqbL3U22f8Y-bl0o",
  authDomain: "chic-attire-db.firebaseapp.com",
  projectId: "chic-attire-db",
  storageBucket: "chic-attire-db.appspot.com",
  messagingSenderId: "365811727548",
  appId: "1:365811727548:web:b6ca60759540ed5e2da4b9",
  measurementId: "G-CGM0R63NG5"

};

firebase.initializeApp(config)

export const auth=firebase.auth()
export const firestore = firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
