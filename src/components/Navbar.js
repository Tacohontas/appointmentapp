import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/_app.scss";

class Navbar extends Component {
  state = {
    loggedIn: false,
  };

  onClickLogOut() {
    localStorage.clear()
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar_left">
          <Link to="/">
            <h2 className="navbar_logo">Herrängens Tennisklubb</h2>
          </Link>
        </div>
        <div className="navbar_right">
          <ul>
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
            <li>
              <Link to="/Bookings">Mina bokningar</Link>
            </li>

            <li>
              <Link onClick={this.onClickLogOut.bind(this)} to="/">
                Logga ut
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Navbar;
