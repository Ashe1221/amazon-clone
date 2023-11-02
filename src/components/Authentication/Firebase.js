/** @format */

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD58LBfrrk-I1Jq7lD-vcOeEiPGLZZaxe0",
  authDomain: "fir-6e0f1.firebaseapp.com",
  projectId: "fir-6e0f1",
  storageBucket: "fir-6e0f1.appspot.com",
  messagingSenderId: "926279346415",
  appId: "1:926279346415:web:1c54dc28b12239a79e931a",
  measurementId: "G-2M8MFWLMM9",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
// const analytics = getAnalytics(app);

export { auth, db };
