import React from "react";
import { useHistory } from "react-router";
import { logout } from "../../services/auth";
import "./LogoutButton.css";

const LogoutButton = ({ setAuthenticated }) => {
  let history = useHistory();
  
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    history.push("/login")
  };

  return (
    <button className="logout_button" onClick={onLogout}>
      logout
    </button>
  );
};

export default LogoutButton;
