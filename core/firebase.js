// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQM6a_bvPyo_Yj2GXb-z3hBr9BLIk68CA",
  authDomain: "awesome-app-8f6dc.firebaseapp.com",
  projectId: "awesome-app-8f6dc",
  storageBucket: "awesome-app-8f6dc.appspot.com",
  messagingSenderId: "614673609072",
  appId: "1:614673609072:web:fd826847ee67f7253edfb5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
