import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="container header-container">
          <h2>Logo</h2>
          <nav>
            <ul className="navlist">
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/about">
                <li>About</li>
              </NavLink>
              <NavLink to="/contact">
                <li>Contact</li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
