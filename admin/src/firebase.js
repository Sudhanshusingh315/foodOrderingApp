// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByrP14_gyvXr7H04Nu_aGmuVV4AfWSYW4",
  authDomain: "memorymatchinggame-25508.firebaseapp.com",
  projectId: "memorymatchinggame-25508",
  storageBucket: "memorymatchinggame-25508.appspot.com",
  messagingSenderId: "963696348345",
  appId: "1:963696348345:web:edb5a1653829e8ffb11f68",
  measurementId: "G-83YNG5GQB7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
