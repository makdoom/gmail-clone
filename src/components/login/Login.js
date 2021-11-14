import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/user/userSlice";
import { auth, provider } from "../../firebase";
import "./login.css";

const Login = () => {
  const dispatch = useDispatch();

  // login
  const loginWithGoogle = async () => {
    const { user } = await auth.signInWithPopup(provider);
    dispatch(
      login({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      })
    );
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="/images/gmail.jpg" alt="" />
        <Button
          onClick={loginWithGoogle}
          variant="contained"
          className="login__btn"
        >
          Login with Google
        </Button>
      </div>
    </div>
  );
};
export default Login;
