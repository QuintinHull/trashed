import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import { setUser } from "../../store/session";
import SignUpForm from "../auth/SignUpForm";
import "./SplashView.css";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      dispatch(setUser(user));
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    const user = await login("demo@aa.io", "password");
    if (!user.errors) {
      dispatch(setUser(user));
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="splash_container">
      <div className="splash_container_content">
        <div className="splash_column_1">
          <div className="splash_login_container">
            <form onSubmit={onLogin}>
              <div>log in</div>
              <div>
                {errors.map((error) => (
                  <div>{error}</div>
                ))}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={updateEmail}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={updatePassword}
                />
                <button type="submit">Login</button>

                <button type="submit" onClick={demoLogin}>
                  Demo Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="splash_column_2">
          {<img src="logo_beach.svg"></img>}
        </div>
        <div className="splash_column_3">
          <div className="splash_signup_container">
            <SignUpForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </div>
        </div>
      </div>
      <div className="splash_title">TRASHED</div>
    </div>
  );
};

export default LoginForm;
