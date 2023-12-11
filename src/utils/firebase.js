// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdhS3MQkMZzwV-9zYWixN-qdGHBwB5qfM",
  authDomain: "netflixgpt-6a6bc.firebaseapp.com",
  projectId: "netflixgpt-6a6bc",
  storageBucket: "netflixgpt-6a6bc.appspot.com",
  messagingSenderId: "115011963997",
  appId: "1:115011963997:web:0a10827cefc6e8538d11b4",
  measurementId: "G-GQRWBZ95DE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




const auth = getAuth(app);

export { auth };