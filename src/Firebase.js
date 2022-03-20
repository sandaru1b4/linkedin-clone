import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBudNPtd028A8sa6EYx-WemXXG4kdBVKqw",
  authDomain: "linkedin-clone-a8563.firebaseapp.com",
  projectId: "linkedin-clone-a8563",
  storageBucket: "linkedin-clone-a8563.appspot.com",
  messagingSenderId: "183916032046",
  appId: "1:183916032046:web:6fb1caae3a9098a097afbf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, auth };
