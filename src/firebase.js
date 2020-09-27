// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBt05-iEJOfRkxoYpSAPISUH081X_XsgZE",
  authDomain: "instagram-clone-aed22.firebaseapp.com",
  databaseURL: "https://instagram-clone-aed22.firebaseio.com",
  projectId: "instagram-clone-aed22",
  storageBucket: "instagram-clone-aed22.appspot.com",
  messagingSenderId: "180151743114",
  appId: "1:180151743114:web:0a6eeb573361029c3a7373",
  measurementId: "G-GWFW6JYJHZ",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
