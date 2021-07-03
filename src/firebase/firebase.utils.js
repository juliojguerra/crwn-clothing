import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyADCRinBzb0CfiZzRtJnJYHxH1c0SHRrc8',
  authDomain: 'crwn-db-af446.firebaseapp.com',
  projectId: 'crwn-db-af446',
  storageBucket: 'crwn-db-af446.appspot.com',
  messagingSenderId: '234432123853',
  appId: '1:234432123853:web:fcadeaee16fa0d018cea84',
  measurementId: 'G-YTB64VMGY5',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
