import React, { useEffect } from "react";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

function PhoneAuth(props) {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(props.auth);

    ui.start(".Phone-auth-container", {
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
      signInSuccessUrl: "admin/dashboard",
      privacyPolicyUrl: "/",
      callbacks: {
        signInFailure: (error) => {
          // Handle sign-in failures here
          console.error("Sign-in failure:", error);

          // You can display an error message to the user or perform other actions
          // For example, you can show a toast notification
          // Replace this with your preferred error handling mechanism
          alert("Sign-in failed. Please try again.");
        },
      },
    });

    return () => {
      ui.delete(); // Clean up the Firebase UI instance when the component is unmounted
    };
  }, [props.auth]);

  return <div className="Phone-auth-container"></div>;
}

export default PhoneAuth;
