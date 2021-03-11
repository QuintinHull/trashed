import React from "react";
import { logout } from "../../services/auth";
import "./LogoutButton.css";

const LogoutButton = ({ setAuthenticated }) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return (
    <button className="logout_button" onClick={onLogout}>
      logout
    </button>
  );
};

export default LogoutButton;
