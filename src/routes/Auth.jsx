import * as React from "react";
import {
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
} from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../data/firebase";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const signinWithGoogle = async () => {
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithRedirect(auth, googleAuthProvider);
    getRedirectResult(auth).then((result) => {
      console.log(result.user?.displayName);
      if (result.user) {
        navigate("/");
      }
    });
  };

  return (
    <div className="Auth">
      <section className="btn_main">
        <button
          onClick={async () => {
            await signinWithGoogle();
            navigate("/");
          }}
        >
          <span>Sign in with Google</span>
          <i>
            <FaGoogle size={24} />
          </i>
        </button>
      </section>
    </div>
  );
};

export default Auth;
