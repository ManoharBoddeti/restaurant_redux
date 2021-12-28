import React from "react";

export default function Navbar() {
  return (
    <div className="navbar-menu">
      <div className="nav-link">
        <h4>Logo</h4>
      </div>

      <div className="links">
        <div className="search">
          <input type="text" placeholder="search for dish" />
        </div>
        <h6 className="login">Login</h6>
        <h6 className="back">Back</h6>
      </div>
    </div>
  );
}
