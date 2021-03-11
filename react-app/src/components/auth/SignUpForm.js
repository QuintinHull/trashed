import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import { signUp } from "../../services/auth";
import { setUser } from "../../store/session";
import { addUser } from "../../store/user";

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

  const demoLogin = async (e) => {
    e.preventDefault();
    const user = await login("demo@aa.io", "password");
    dispatch(setUser(user));
  };

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
    <div>
      <div>sign up</div>
      <form onSubmit={onSignUp}>
        <div>
          <label>first name</label>
          <input
            type="text"
            name="firstName"
            onChange={updateFirstName}
            value={firstName}
          ></input>
        </div>
        <div>
          <label>last name</label>
          <input
            type="text"
            name="lastName"
            onChange={updateLastName}
            value={lastName}
          ></input>
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <label>confirm password</label>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <form onSubmit={demoLogin}>
        <button type="submit">Demo Login</button>
      </form>
    </div>
  );
};

export default SignUpForm;
