import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }: any) => {
  const navigate = useNavigate();
  const loginInWithGooglr = () => {
    // Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div>
      <p>login</p>
      <button onClick={loginInWithGooglr}>Googleでlogin</button>
    </div>
  );
};

export default Login;
