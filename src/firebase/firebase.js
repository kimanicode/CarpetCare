// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth}  from './firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd0Znno7Yb7Hf4ut-JL8Xmn5pv4kEUXLA",
  authDomain: "carpetcare-b54a9.firebaseapp.com",
  projectId: "carpetcare-b54a9",
  storageBucket: "carpetcare-b54a9.appspot.com",
  messagingSenderId: "271869708514",
  appId: "1:271869708514:web:c869dafec3cc87c17b36bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app,auth};