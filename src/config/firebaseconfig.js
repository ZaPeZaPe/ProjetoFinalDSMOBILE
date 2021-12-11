import "firebase/storage";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


var firebaseConfig = {
  apiKey: "AIzaSyA7Y8H0G6z7hyCfpKwOuSRENnInykNWq50",
  authDomain: "task-3f670.firebaseapp.com",
  projectId: "task-3f670",
  storageBucket: "task-3f670.appspot.com",
  messagingSenderId: "816401303769",
  appId: "1:816401303769:web:ae44b27f321724558196c8",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;
