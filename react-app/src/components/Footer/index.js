import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = ({ setAuthenticated }) => {
  const imagePath = process.env.NODE_ENV === "production" ? "/static" : "";

  return <div className="foot_container">footer</div>;
};

export default Footer;
