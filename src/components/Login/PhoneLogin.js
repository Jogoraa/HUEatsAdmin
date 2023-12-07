import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { onAuthStateChanged, updateCurrentUser } from "firebase/auth";
import PhoneAuth from "./PhoneAuth";
import "./PhoneLogin.css"; // Import the CSS file

function PhoneLogin() {
  const firebaseConfig = {
    apiKey: "AIzaSyDByh2QonwoWUFx5HRvriJuZG_oiVM0QrU",
    authDomain: "foodapp2-4ba23.firebaseapp.com",
    projectId: "foodapp2-4ba23",
    storageBucket: "foodapp2-4ba23.appspot.com",
    messagingSenderId: "269744887751",
    appId: "1:269744887751:web:23879bac40f9ff96b76be2",
    measurementId: "G-FPY9C1VV8C",
  };
  firebase.initializeApp(firebaseConfig);

  const [user, setuser] = useState(null);
  useEffect(() => {
    const unRegistered = onAuthStateChanged(firebase.auth(), (CurrentUser) => {
      console.log(CurrentUser);
      setuser(CurrentUser);
    });
    return () => unRegistered();
  });

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="content-container">
        <h1 className="page-heading">Admin Login Page</h1>
        <PhoneAuth auth={firebase.auth()} />
      </div>
    </div>
  );
}

export default PhoneLogin;