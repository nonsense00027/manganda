import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwjE8lPnke3MbW2lDPzQvs-ODrgd4xi8I",
  authDomain: "assessment-57dab.firebaseapp.com",
  projectId: "assessment-57dab",
  storageBucket: "assessment-57dab.appspot.com",
  messagingSenderId: "44669586752",
  appId: "1:44669586752:web:bf2c275f4a891862eebea5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore, app };
