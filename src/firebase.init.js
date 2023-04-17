// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcamXDrDEbMj68N-JGpVxF8KqwS5y9B2I",
  authDomain: "cosmahut.firebaseapp.com",
  projectId: "cosmahut",
  storageBucket: "cosmahut.appspot.com",
  messagingSenderId: "895456331154",
  appId: "1:895456331154:web:94c30a25d5740b0c1ded4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;