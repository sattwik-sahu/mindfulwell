// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mindfulwell-a0eca.firebaseapp.com",
  projectId: "mindfulwell-a0eca",
  storageBucket: "mindfulwell-a0eca.appspot.com",
  messagingSenderId: "1006478027283",
  appId: "1:1006478027283:web:a8aeb30f07d27bc9536de6",
  measurementId: "G-FMZMKCP1ZL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;
