import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9-ed--jQxbFR8sb1K6WLC-oYXkKjwHXw",
  authDomain: "library-system-99ee4.firebaseapp.com",
  projectId: "library-system-99ee4",
  storageBucket: "library-system-99ee4.appspot.com",  // also fix typo: was `.app`
  messagingSenderId: "759407109556",
  appId: "1:759407109556:web:5b7bd8885120309c53fee1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app); 
export const auth = getAuth(app);
