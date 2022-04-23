import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";
/* function */
const Header = () => {
  return (
    <div className="header">
      <Link to={"/"} className="header-title">
        <h1>Movies-App</h1>
      </Link>
      <SearchBox />
      <a
        href="https://github.com/anarabakyt"
        className="header-image"
        target={"_blank"}
        rel="noreferrer"
      >
        <img
          src="https://avatars.githubusercontent.com/u/73492945?v=4"
          alt="userImage"
        />
      </a>
    </div>
  );
};

export default Header;