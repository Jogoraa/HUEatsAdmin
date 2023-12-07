import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"; // Import getAuth

const firebaseConfig = {
  apiKey: "AIzaSyDByh2QonwoWUFx5HRvriJuZG_oiVM0QrU",
  authDomain: "foodapp2-4ba23.firebaseapp.com",
  projectId: "foodapp2-4ba23",
  storageBucket: "foodapp2-4ba23.appspot.com",
  messagingSenderId: "269744887751",
  appId: "1:269744887751:web:23879bac40f9ff96b76be2",
  measurementId: "G-FPY9C1VV8C"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app); // Initialize auth

export {storage, db, auth }; // Exp