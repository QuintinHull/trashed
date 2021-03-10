import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import SearchBar from "./SearchBar";
import "./NavBar.css";

const NavBar = ({ setAuthenticated }) => {
  const imagePath = process.env.NODE_ENV === "production" ? "/static" : "";

  return (
    <nav className="nav_container">
      <div className="nav_container__left">
        <div>
          <NavLink
            className="nav_image"
            to="/"
            exact={true}
            activeClassName="active"
          >
            {<img src="simpleLogo.svg"></img>}
          </NavLink>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      <div className="nav_container__center">
        <div>TRASHED</div>
      </div>
      <div className="nav_container__right">
        <NavLink to="/login" exact={true} activeClassName="active">
          <button className="navbar_links navbar_links1">login</button>
        </NavLink>

        <NavLink to="/sign-up" exact={true} activeClassName="active">
          <button className="navbar_links">sign up</button>
        </NavLink>

        {/* <NavLink
          to="/users"
          exact={true}
          className="navbar_links"
          activeClassName="active"
        >
          users
        </NavLink> */}

        <LogoutButton
          className="navbar_links"
          setAuthenticated={setAuthenticated}
        />
      </div>
    </nav>
  );
};

export default NavBar;
