import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBdFyNdd0BMSkkT0kDZuTbpYKsbn8y3Izs",
  authDomain: "liderbord-v2.firebaseapp.com",
  projectId: "liderbord-v2",
  storageBucket: "liderbord-v2.appspot.com",
  messagingSenderId: "143632338999",
  appId: "1:143632338999:web:58642a54b1befc43a76fb2",
  measurementId: "G-H9NPVJ3WVC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
