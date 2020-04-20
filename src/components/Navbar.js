import React from "react";
import "../styles/_app.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <h2 className="navbar_logo">SOLBERGA Tennisklubb</h2>
      </div>
      <div className="navbar_right">
        <ul>
          <li>
            <a href="#">Mina bokningar</a>
          </li>
          <li>
            <a href="#">Logga ut</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
