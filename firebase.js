// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_EYbRWk7DcyafLD0-u1Gq2hB4Izk3ymc",
  authDomain: "instafor-md.firebaseapp.com",
  projectId: "instafor-md",
  storageBucket: "instafor-md.appspot.com",
  messagingSenderId: "913249774780",
  appId: "1:913249774780:web:bfc1f935993a79ee7334b9",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
