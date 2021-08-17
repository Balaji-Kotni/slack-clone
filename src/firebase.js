import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlJymPUtIe3qatooPmR60JQihKePBLOm0",
  authDomain: "slack-clone-ef999.firebaseapp.com",
  projectId: "slack-clone-ef999",
  storageBucket: "slack-clone-ef999.appspot.com",
  messagingSenderId: "428464825968",
  appId: "1:428464825968:web:5bb4fb6db6dce02b0b36b5",
  measurementId: "G-3SH1LKMDV0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
