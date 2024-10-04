// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  /* Template config, replace with your own values */
  /*
  apiKey:
  authDomain:
  projectId:
  storageBucket:
  messagingSenderId:
  appId:
  measurementId:
  */
};

const app = initializeApp(firebaseConfig);

const auth: Auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
