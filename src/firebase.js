// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDfrCMoHweaNwm9OEVrQnfNKtQrI8shYIc",
    authDomain: "facebook-clone-34982.firebaseapp.com",
    projectId: "facebook-clone-34982",
    storageBucket: "facebook-clone-34982.appspot.com",
    messagingSenderId: "238636610584",
    appId: "1:238636610584:web:d5e784d081cd61cf34ff6d",
    measurementId: "G-GGT4G492HH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;
