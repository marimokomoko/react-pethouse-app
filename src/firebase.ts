import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFnG5r1wcN0FAUsEr1XOvXohttunFlx-M",
  authDomain: "react-pethouse-app.firebaseapp.com",
  projectId: "react-pethouse-app",
  storageBucket: "react-pethouse-app.appspot.com",
  messagingSenderId: "511524405600",
  appId: "1:511524405600:web:402056500419cb19421e05",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, db, storage };
