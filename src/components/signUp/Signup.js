import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
//
import { usePullStateValue } from "../../globally_data_layer/StateProvider";

const Signup = () => {
  // from statet provider
  const [state, dispatch] = usePullStateValue();
  const { users } = state;

  //
  const navigate = useNavigate();

  // input fields state
  const [userData, setUserData] = useState({
    inputFullName: "",
    inputEmail: "",
    inputPassword: "",
    inputConfirmPassword: "",
    privacy: false,
  });

  // function for create new user - dispactch new user
  const dispatchSignupData = (newUserAdd) => {
    const { userName, userEmail, userPassword } = newUserAdd;
    dispatch({
      type: "SIGN_UP_USER",
      item: {
        name: userName,
        email: userEmail,
        password: userPassword,
      },
    });
    //
    navigate("/signin");
  };

  // function for handle input fields value
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setUserData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  // function checked validation
  const submitSignupData = (e) => {
    e.preventDefault();

    // create only for understanding
    let newUserAdd = {
      userName: userData.inputFullName,
      userEmail: userData.inputEmail,
      userPassword: userData.inputPassword,
    };
    const { userName, userEmail, userPassword } = newUserAdd;

    // condition check
    if (
      userName.length > 0 &&
      userEmail.length > 0 &&
      userPassword.length > 0 &&
      userData.inputConfirmPassword?.length > 0
    ) {
      // check user is valid or not
      let userFind = users.find(({ email }) => email === userEmail);
      // chechk condiiton
      if (userFind) {
        if (userPassword !== userData.inputConfirmPassword) {
          alert("Confirm Password is not same as Password.");
        } else {
          dispatchSignupData(newUserAdd);
          alert("User successfully registered!");
        }
      } else {
        alert("This email ID already registered with this account");
      }
    } else {
      alert("Field cannot be empty!");
    }
  };

  return (
    <div className="signup">
      {/*  */}
      <Link className="remove__decoration" to="/">
        <span className="signup__logo">amazone.</span>
      </Link>

      {/*  */}
      <div className="signup__container">
        <h1>Signup!</h1>

        <form onSubmit={submitSignupData}>
          <h5>Full Name</h5>
          <input
            type="text"
            placeholder="full name here...."
            name="inputFullName"
            onChange={inputEvent}
            autoComplete="off"
            value={userData.inputFullName}
          />
          <h5>Email</h5>
          <input
            type="email"
            placeholder="email here...."
            name="inputEmail"
            onChange={inputEvent}
            autoComplete="off"
            value={userData.inputEmail}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="password here...."
            name="inputPassword"
            onChange={inputEvent}
            autoComplete="off"
            value={userData.inputPassword}
          />
          <h5>Confirm Password</h5>
          <input
            type="password"
            placeholder="confirm password here...."
            name="inputConfirmPassword"
            onChange={inputEvent}
            autoComplete="off"
            value={userData.inputConfirmPassword}
          />
          <p>
            <input type="checkbox" />
            By signup-in you agree to AMAZONE Conditions of Use &amp; Sale.
          </p>
          <button type="submit" className="signin__userButton">
            CREATE ACCOUNT
          </button>
        </form>

        <Link className="remove__decoration" to="/signin">
          <button className="signup__userButton">
            Already have an account?
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
