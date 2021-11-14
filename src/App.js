import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.css";
import Header from "./components/Header/Header";
import Login from "./components/login/Login";
import Main from "./components/Main/Main";
import { login, logout, selectUser } from "./features/user/userSlice";
import { auth } from "./firebase";

function App() {
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <div className="app">
        {!currentUser ? (
          <Login />
        ) : (
          <>
            <Header />
            <Main />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
