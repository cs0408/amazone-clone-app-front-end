import React, { useEffect, useState } from "react";
import "./Signin.css";
//
import { Link, useNavigate } from "react-router-dom";
//
import { usePullStateValue } from "../../globally_data_layer/StateProvider";

const Signin = () => {
  //
  const navigate = useNavigate();

  //
  const [state, dispatch] = usePullStateValue();
  const { users } = state;

  //
  const [cradentialStates, setCradentialStates] = useState({
    inputEmail: "",
    inputPassword: "",
  });

  //
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setCradentialStates((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  //
  const submitLoginData = (e) => {
    // remove default submit functionaliyt
    e.preventDefault();
    // create only for understanding
    let currentUserCome = {
      userEmail: cradentialStates.inputEmail,
      userPassword: cradentialStates.inputPassword,
    };
    const { userEmail, userPassword } = currentUserCome;

    // check validation
    if (userEmail !== "" && userPassword !== "") {
      // check user is valid or not
      let userFind = users.find(({ email }) => email === userEmail);
      // chechk condiiton
      // or ==> if(userFind === undefined)
      if (userFind === undefined) {
        alert("This email ID isn't registered with amazone clone app!!");
      } else {
        if (userPassword === userFind.password) {
          dispatch({
            type: "SET_USER",
            item: userFind.name,
          });
          navigate("/");
          // window.location = "/"; -- don't use because page is auto refresh
        } else {
          alert("Wrong Password");
        }
      }
    } else {
      alert("Field cannot be empty!");
    }
  };

  return (
    <div className="signin">
      {/*  */}
      <Link className="remove__decoration" to="/">
        <span className="signin__logo">amazone.</span>
      </Link>

      {/*  */}
      <div className="signin__container">
        <h1>SignIn!</h1>

        <form onSubmit={submitLoginData}>
          <h5>Email</h5>
          <input
            type="email"
            placeholder="email here...."
            name="inputEmail"
            onChange={inputEvent}
            autoComplete="off"
            value={cradentialStates.inputEmail}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="password here...."
            name="inputPassword"
            onChange={inputEvent}
            autoComplete="off"
            value={cradentialStates.inputPassword}
          />
          <button type="submit" className="signin__userButton">
            Sign In
          </button>
        </form>

        <p>By signing-in you agree to AMAZONE Conditions of Use &amp; Sale.</p>

        <Link className="remove__decoration" to="/signup">
          <button className="signup__userButton">Create New Account</button>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
