// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnhuh-FMo4x1OwmN2pho4ECiSps5uqsgs",
  authDomain: "fundamorstore.firebaseapp.com",
  projectId: "fundamorstore",
  storageBucket: "fundamorstore.firebasestorage.app",
  messagingSenderId: "867831649119",
  appId: "1:867831649119:web:cbb7c034faa50f49705cea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };