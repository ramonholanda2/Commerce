import firebase from "firebase";
import 'firebase/app'
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxteFlmQIwIVsqcJJ8fyg3PyFiAwQyoJM",
  authDomain: "milk-holanda.firebaseapp.com",
  projectId: "milk-holanda",
  storageBucket: "milk-holanda.appspot.com",
  messagingSenderId: "445296562241",
  appId: "1:445296562241:web:0786eab472057e26ec36c0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const storage = firebaseApp.storage(); 

export { auth, storage }