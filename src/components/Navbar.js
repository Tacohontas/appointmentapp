import React from "react";
import {Link} from "react-router-dom";

// Styles
import "../styles/_app.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_left">
        <Link to="/"> <h2 className="navbar_logo">SOLBERGA Tennisklubb</h2></Link>
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
    </nav>
  );
};

export default Navbar;
