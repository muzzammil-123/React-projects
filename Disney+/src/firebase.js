import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAOdrPKusWWxCSEoWjaXKGiv8Zj1VGoJWs",
    authDomain: "disneyclone-1f45e.firebaseapp.com",
    projectId: "disneyclone-1f45e",
    storageBucket: "disneyclone-1f45e.appspot.com",
    messagingSenderId: "623982783066",
    appId: "1:623982783066:web:b75965c333ab38d9750663",
    measurementId: "G-7RWY2RZXDQ"
};

let app = initializeApp(firebaseConfig)
let auth = getAuth(app)
let provider= new GoogleAuthProvider()

export {auth, provider}
