import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="showcase">
      <div className="showcase-top">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="logo" />
        <Link to="/" className="btn btn-rounded">
          Sign In
        </Link>
      </div>

      <div className="showcase-content">
        <h1>Unlimited Movies,TV shows and more</h1>
        <p>Watched anywhere. Cancel Anytimes</p>
        <Link to="/netflix-show" className="btn btn-xl">
          Watch Free For 30 Days
          <i className="fas fa-chevron-right btn-icon"> </i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
