import firebase from "firebase";
import 'firebase/app'
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.API_KEY_FIREBASE,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const storage = firebaseApp.storage(); 

export { auth, storage }