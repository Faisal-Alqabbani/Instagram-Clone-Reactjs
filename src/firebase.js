// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
/*

Firebase config.


*/
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
