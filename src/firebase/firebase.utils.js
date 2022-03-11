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

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email, 
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;