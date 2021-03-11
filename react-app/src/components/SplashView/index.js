import React, { useState, useEffect } from "react";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import { authenticate } from "../../services/auth";

import "./SplashView.css";

const SplashView = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <div>
      <div>spalsh</div>
    </div>
  );
};

export default SplashView;
