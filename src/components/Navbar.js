import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/_app.scss";

class Navbar extends Component {
  state = {
    loggedIn: null,
  };

  componentDidMount() {
    this.setState({ loggedIn: !!localStorage.getItem("user") });
  }

  onClickLogOut() {
    localStorage.clear();
    this.setState({ loggedIn: false });
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
              {this.state.loggedIn && (
                <Link onClick={this.onClickLogOut.bind(this)} to="/">
                  Logga ut
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Navbar;
