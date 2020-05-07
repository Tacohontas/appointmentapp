import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/_app.scss";

class Navbar extends Component {
  state = {
    status: null,
  };

  componentDidMount() {
    console.log("navbar mount");
    this.setState({status:this.props.loggedInStatus});
  }

  componentDidUpdate() {
    console.log("navbar update");
    
  }

  onClickLogOut() {
    localStorage.clear();
    this.setState({ status: "NOT_LOGGED_IN"});
    this.props.handleCallback("NOT_LOGGED_IN");
  }

  render() {
    return (
      <div className="navbar">
        <h5>state from navbar:{this.state.status}</h5>
        <div className="navbar_left">
          <Link to="/">
            <h2 className="navbar_logo">
              Herrängens Tennisklubb
            </h2>
          </Link>
        </div>
        <div className="navbar_right">
          <ul>

            <li>
              <Link to="/Bookings">Mina bokningar</Link>
            </li>

            <li>{this.props.loggedInStatus !== "LOGGED_IN" && <Link to="/Admin">Admin (not logged in)</Link>}</li>

            <li>
              {this.props.loggedInStatus === "LOGGED_IN" && (
                <Link onClick={this.onClickLogOut.bind(this)} to="/">
                  Logga ut (logged in)
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
