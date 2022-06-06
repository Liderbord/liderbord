import "../styles/login.css";
import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { authentication } from "./firebaseConfig";

export const login = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(authentication, provider)
    .then((results) => {
      console.log("log in successful");
    })
    .catch((err) => {
      console.log("could not sign in:" + err);
    });
};
