import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
// import { login } from "../../services/auth";
import { signUp } from "../../services/auth";
import { setUser } from "../../store/session";
import { addUser } from "../../store/user";
import "./SignUpForm.css";

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    setErrors([]);
    if (password === repeatPassword) {
      const user = await signUp(firstName, lastName, email, password);
      if (!user.errors) {
        dispatch(setUser(user));
        dispatch(addUser(user));
        setAuthenticated(true);
      } else {
        setErrors(user.errors);
      }
    } else {
      setErrors((prevErrors) => [...prevErrors, "Password fields must match!"]);
    }
  };

  // const demoLogin = async (e) => {
  //   e.preventDefault();
  //   const user = await login("demo@aa.io", "password");
  //   dispatch(setUser(user));
  // };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setlastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signup_body">
      <form className="splash_signup_form" onSubmit={onSignUp}>
        <div className="signup_row_1">
          <div>sign up</div>
        </div>
        <div className="signup_row_2">
          {/* <label>first name</label> */}
          <input
            type="text"
            placeholder="first name"
            name="firstName"
            onChange={updateFirstName}
            value={firstName}
          ></input>
        </div>
        <div className="signup_row_3">
          {/* <label>last name</label> */}
          <input
            type="text"
            placeholder="last name"
            name="lastName"
            onChange={updateLastName}
            value={lastName}
          ></input>
        </div>
        <div className="signup_row_4">
          {/* <label>email</label> */}
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className="signup_row_5">
          {/* <label>password</label> */}
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className="signup_row_6">
          {/* <label>confirm password</label> */}
          <input
            type="password"
            placeholder="confirm password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div className="signup_row_7">
          <button type="submit">sign up</button>
        </div>
        {/* <form onSubmit={demoLogin}>
          <button type="submit">Demo Login</button>
        </form> */}
      </form>
    </div>
  );
};

export default SignUpForm;
