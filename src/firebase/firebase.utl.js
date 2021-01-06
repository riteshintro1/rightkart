import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCQnLfpftPtVKgLVHpTKb8f16gwWvh_-U4",
    authDomain: "rightkart-81faf.firebaseapp.com",
    projectId: "rightkart-81faf",
    storageBucket: "rightkart-81faf.appspot.com",
    messagingSenderId: "553177647427",
    appId: "1:553177647427:web:d0bd578fa59f92321a07f6"
};
firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
  