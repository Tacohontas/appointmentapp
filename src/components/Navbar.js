import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/_app.scss";

// Vi får loggedInStatus prop från Approute.
// prop = null om user ej är inloggad
// prop = jwt om user är inloggad

class Navbar extends Component {
  state = {
    // status: null,
  };

  onClickLogOut() {
    localStorage.clear();
    this.props.handleCallback(null);
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
              <Link to="/Bookings">Mina bokningar</Link>
            </li>

            <li>
              {this.props.loggedInStatus === null && (
                <Link to="/Admin">Logga in</Link>
              )}
            </li>

            {!!this.props.loggedInStatus && (
              <li>
                <Link to="/Admin">
                  Adminpanel
                </Link>
              </li>
              
            )}

            {!!this.props.loggedInStatus && (
              <li>
                <Link onClick={this.onClickLogOut.bind(this)} to="/">
                  Logga ut
                </Link>
              </li>
              
            )}
          </ul>
        </div>
      </div>
    );
  }
}
export default Navbar;
