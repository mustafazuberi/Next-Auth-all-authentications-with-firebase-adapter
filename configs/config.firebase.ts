import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDdL52wxIrnr3-nvVGuyTTzigodjq2yWXI",
  authDomain: "next-auths-firebase-adapter.firebaseapp.com",
  projectId: "next-auths-firebase-adapter",
  storageBucket: "next-auths-firebase-adapter.appspot.com",
  messagingSenderId: "373910330515",
  appId: "1:373910330515:web:91231bc986a26a7c408166",
  measurementId: "G-HPNTL41XLQ",
};

const app = getApps().length > 0 ? getApp() : initializeApp(FIREBASE_CONFIG);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
