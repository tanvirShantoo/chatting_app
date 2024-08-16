// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWIYDSLP0985NIi96fN8goKwDi6YT-Cvk",
  authDomain: "chatting-app2024-b26bb.firebaseapp.com",
  projectId: "chatting-app2024-b26bb",
  storageBucket: "chatting-app2024-b26bb.appspot.com",
  messagingSenderId: "82431062733",
  appId: "1:82431062733:web:5dcf6cd9947909d7da6f84",
  measurementId: "G-4J54JBPECX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database

