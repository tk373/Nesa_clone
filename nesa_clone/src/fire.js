import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { GoogleAuthProvider, getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyg1Y-B40izZZGqgsVi1h7xhye3n4c14c",
    authDomain: "nesa-clone.firebaseapp.com",
    projectId: "nesa-clone",
    storageBucket: "nesa-clone.appspot.com",
    messagingSenderId: "357872578431",
    appId: "1:357872578431:web:5bbcbb8a32a4483432344a",
    measurementId: "G-S1STV7Z3PF"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage()
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider()


export { db, auth, googleAuthProvider, storage }