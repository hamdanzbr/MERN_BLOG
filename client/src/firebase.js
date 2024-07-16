// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-8cdb3.firebaseapp.com",
  projectId: "mern-blog-8cdb3",
  storageBucket: "mern-blog-8cdb3.appspot.com",
  messagingSenderId: "42345987296",
  appId: "1:42345987296:web:d3279ac3ccfa553f12a485"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

