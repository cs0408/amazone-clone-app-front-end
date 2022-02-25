import React from "react";
// import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
// components
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Signin from "./components/signIn/Signin";
import SignUp from "./components/signUp/Signup";
import Header from "./components/header/Header";

const App = () => {
  // copy for path
  const location = useLocation();

  return (
    <>
      <div className="app">
        {location.pathname !== "/signin" && location.pathname !== "/signup" ? (
          <Header />
        ) : (
          ""
        )}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="*" element={<h1>404 Error! Page Note Found.</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
