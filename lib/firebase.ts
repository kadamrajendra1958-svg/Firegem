import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA867h0x79wIboWCLolNP70Yy4hgnFUinU",
  authDomain: "growth-1a266.firebaseapp.com",
  projectId: "growth-1a266",
  storageBucket: "growth-1a266.firebasestorage.app",
  messagingSenderId: "376106881156",
  appId: "1:376106881156:web:affd5e1b52c7b7b035b2d1",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, db, storage, googleProvider };
