import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const NavBar: React.FunctionComponent = () => {
  return (
    <div>
      <nav className="navbar">
        <Link className="navbar__item" to="/allcats">
          All Cats
        </Link>
        <Link className="navbar__item" to="/addcat">
          Add cat
        </Link>
      </nav>
    </div>
  );
};
