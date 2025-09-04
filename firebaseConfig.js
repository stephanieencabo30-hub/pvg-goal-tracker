// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcVPlCWoYGQBYu1D4V7gW3Otn1nNe6Krc",
  authDomain: "encabo-mobile-app---tracker.firebaseapp.com",
  projectId: "encabo-mobile-app---tracker",
  storageBucket: "encabo-mobile-app---tracker.firebasestorage.app",
  messagingSenderId: "642420059082",
  appId: "1:642420059082:web:697380e43ae5ae4eb8bd33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)