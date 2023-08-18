// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMRK5cakjbtnMymWLwi26gFcxyP8r_AKk",
  authDomain: "music-project-4d9b1.firebaseapp.com",
  projectId: "music-project-4d9b1",
  storageBucket: "music-project-4d9b1.appspot.com",
  messagingSenderId: "257187841887",
  appId: "1:257187841887:web:82d3a599314bdb630418ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();