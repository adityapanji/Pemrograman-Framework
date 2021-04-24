import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiTmF24edxiDB5eUK9ye9XL7GZNZ0CmaI",
  authDomain: "fir-login-e5781.firebaseapp.com",
  projectId: "fir-login-e5781",
  storageBucket: "fir-login-e5781.appspot.com",
  messagingSenderId: "796767423019",
  appId: "1:796767423019:web:317e12fbf735a7a3c8786e",
  measurementId: "G-FJ95NJNR8P"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
