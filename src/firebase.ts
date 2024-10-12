// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  /* Template for Firebase config object */
  // apiKey: 
  // authDomain:
  // projectId:
  // storageBucket:
  // messagingSenderId:
  // appId:
  // measurementId:
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
