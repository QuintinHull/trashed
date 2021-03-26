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

  const imagePath = process.env.NODE_ENV === "production" ? "/static" : "";

  return (
    <div className="splash">
      <div className="splash_about">
        <div className="splash_about_string">report trash in your area</div>
        <div className="splash_about_string">organize clean up events</div>
        <div className="splash_about_string">reduce waste at home</div>
      </div>
      <div className="splash_container">
        <div className="splash_column_1">
          <div className="splash_login_container">
            <form className="splash_login_form" onSubmit={onLogin}>
              <div className="login_row_1">
                <div className="login_title">log in</div>
                <div>
                  {errors.map((error) => (
                    <div className="login_errors">{error}</div>
                  ))}
                </div>
              </div>
              <div className="login_row_2">
                {/* <label htmlFor="email">Email</label> */}
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={updateEmail}
                />
              </div>
              <div className="login_row_3">
                {/* <label htmlFor="password">Password</label> */}
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={updatePassword}
                />
              </div>
              <div className="login_row_4">
                <button
                  className="demo_button"
                  type="submit"
                  onClick={demoLogin}
                >
                  demo
                </button>
                <button className="login_button" type="submit">
                  login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="splash_column_2">
          {<img src={`${imagePath}/logo_beach.svg`} alt="trashed logo"></img>}
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
