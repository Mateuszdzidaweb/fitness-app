// Firebase authentication configs

import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
require("firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyD9iFAiq_5G_o1qkt1QUkV4oWqnDtYoAL4",
    authDomain: "fintess-app-863f3.firebaseapp.com",
    projectId: "fintess-app-863f3",
    storageBucket: "fintess-app-863f3.appspot.com",
    messagingSenderId: "712001895801",
    appId: "1:712001895801:web:4e05682600d4a4c1f743a8",
    measurementId: "G-4B6WHYSD8Z"
};

const fb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
    fb,
    db
}