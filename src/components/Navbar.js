import React from "react";
import {Link} from "react-router-dom";

// Styles
import "../styles/_app.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_left">
        <Link to="/"><h2 className="navbar_logo">SOLBERGA Tennisklubb</h2></Link>
      </div>
      <div className="navbar_right">
        <ul>
          <li>
            {/* <a href="/card">Mina bokningar</a> */}
            <Link to ="/card">Mina bokningar</Link>
          </li>
          <li>
            <a href="#">Logga ut</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
