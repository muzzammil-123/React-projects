// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaKBEYykLcHd_sE09mR01PGV5iGlVbMwY",
  authDomain: "netflix-clone-a4761.firebaseapp.com",
  projectId: "netflix-clone-a4761",
  storageBucket: "netflix-clone-a4761.appspot.com",
  messagingSenderId: "630833424838",
  appId: "1:630833424838:web:eece4649f485ea17cdeac7",
  measurementId: "G-5S4RVFRB29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}
