import React from "react";
import "./Footer.css";

const Footer = () => {
  const imagePath = process.env.NODE_ENV === "production" ? "/static" : "";

  return (
    <div className="foot_container">
      <a href="https://github.com/QuintinHull/trashed" className="foot_github">
        {<img src={`gitHubMark.png`} alt="github logo"></img>}
      </a>
      <a href="www.linkedin.com/in/quintinhull92" className="foot_linkedin">
        {<img src={`linkedIn.png`} alt="linkedin logo"></img>}
      </a>
    </div>
  );
};

export default Footer;
