import React from "react";
// import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export default App;
