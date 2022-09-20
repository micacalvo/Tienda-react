// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwgU0MQmjwKWiewmxmuCOF9eubmsimTBI",
  authDomain: "e-commerce-react-mica.firebaseapp.com",
  projectId: "e-commerce-react-mica",
  storageBucket: "e-commerce-react-mica.appspot.com",
  messagingSenderId: "211712603159",
  appId: "1:211712603159:web:746d0922e44d28a59b1852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)