import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARIJAahtY2KWBsqQcHc5fyhJoxdvIftao",
  authDomain: "manganda-9511a.firebaseapp.com",
  projectId: "manganda-9511a",
  storageBucket: "manganda-9511a.appspot.com",
  messagingSenderId: "139123426529",
  appId: "1:139123426529:web:d4593883c52e50de8ba3a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { app, firestore, auth };
