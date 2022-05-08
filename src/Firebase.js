import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBudNPtd028A8sa6EYx-WemXXG4kdBVKqw",
  authDomain: "linkedin-clone-a8563.firebaseapp.com",
  projectId: "linkedin-clone-a8563",
  storageBucket: "linkedin-clone-a8563.appspot.com",
  messagingSenderId: "183916032046",
  appId: "1:183916032046:web:6fb1caae3a9098a097afbf",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth}
