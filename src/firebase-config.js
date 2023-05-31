// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKzO1UaCFZqpGvJUqCMq9p_CFlD_dxJrE",
  authDomain: "crud-prog-7f0a7.firebaseapp.com",
  projectId: "crud-prog-7f0a7",
  storageBucket: "crud-prog-7f0a7.appspot.com",
  messagingSenderId: "149058929992",
  appId: "1:149058929992:web:612cf87e8aa8fff0081f7d",
  measurementId: "G-G6YXL7VD3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
