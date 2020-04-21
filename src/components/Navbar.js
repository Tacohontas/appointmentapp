import React from "react";
import {Link} from "react-router-dom";
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
            <Link to="/Bookings">Mina bokningar</Link>
          </li>
          <li>
          <Link to="/Logout">Logga ut</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
