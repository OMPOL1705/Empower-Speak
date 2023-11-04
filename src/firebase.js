import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuoVrxYYXCWaoTRgYv7YE1AY1mfX-UENk",
  authDomain: "billion-ables-c5528.firebaseapp.com",
  projectId: "billion-ables-c5528",
  storageBucket: "billion-ables-c5528.appspot.com",
  messagingSenderId: "589428551920",
  appId: "1:589428551920:web:1ec4e010e507c2a0e85235"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);