import firbase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAOdrPKusWWxCSEoWjaXKGiv8Zj1VGoJWs",
    authDomain: "disneyclone-1f45e.firebaseapp.com",
    projectId: "disneyclone-1f45e",
    storageBucket: "disneyclone-1f45e.appspot.com",
    messagingSenderId: "623982783066",
    appId: "1:623982783066:web:b75965c333ab38d9750663",
    measurementId: "G-7RWY2RZXDQ"
  };
let firebaseApp = firbase.initializeApp(firebaseConfig)
let db = firebaseApp.firestore()
let auth = firebase.auth()
let provider  = new firebase.auth.GoogleAuthProvider()
let storage = firebase.storage()

export {auth, provider, storage}

export default db;