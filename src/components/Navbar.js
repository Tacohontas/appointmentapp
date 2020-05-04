import React from "react";
import {Link} from "react-router-dom";
import "../styles/_app.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <Link to="/"> <h2 className="navbar_logo">Herrängens Tennisklubb</h2></Link>
      </div>
      <div className="navbar_right">
        <ul>
          <li>
            <Link to="/fileupload">fileupload</Link>
          </li>
          <li>
            <Link to="/Admin">Admin</Link>
          </li>
          <li>
            <Link to="/Adminlogin">Adminlogin</Link>
          </li>
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
