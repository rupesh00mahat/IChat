// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFnDwmDT4UMLQqLVLHsVmzN_9FY6bTCpQ",
  authDomain: "ichat-b5994.firebaseapp.com",
  projectId: "ichat-b5994",
  storageBucket: "ichat-b5994.appspot.com",
  messagingSenderId: "989700142771",
  appId: "1:989700142771:web:1552d54e770e64973c62c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
