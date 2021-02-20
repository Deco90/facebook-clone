// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase, { firestore } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3Y1WsZdTfrf_LbwGH7VCsfFMmWYWhcZw",
  authDomain: "facebook-clone-767ad.firebaseapp.com",
  projectId: "facebook-clone-767ad",
  storageBucket: "facebook-clone-767ad.appspot.com",
  messagingSenderId: "958397503603",
  appId: "1:958397503603:web:b67ce5c50c3387409eb206",
  measurementId: "G-MMRTV08TXY",
};

const firebaseapp = firebase.initalizeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
