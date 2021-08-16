import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCd3Sv1JEQEEG3EfkMnLbfppKyh8QoMpVU",
    authDomain: "sgmbluumoon.firebaseapp.com",
    projectId: "sgmbluumoon",
    storageBucket: "sgmbluumoon.appspot.com",
    messagingSenderId: "179417674358",
    appId: "1:179417674358:web:5be2f374bb94ee95226557",
    measurementId: "G-4PQ9NCQN7W"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };