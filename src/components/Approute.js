import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import myBookings from "../pages/myBookings";
import App from "./App";
import Navbar from "./Navbar";
import Book from "../pages/Book";
import AdminZone from "../pages/Adminzone";

class Approute extends Component {
  state = {
    loggedInStatus: "NOT_LOGGED_IN",
    user: null,
  };

  componentDidMount() {
    console.log("approute mounted");
  }

  componentDidUpdate() {
    console.log("approute updated");
  }

  render() {
    return (
      <div>
        <h1>from state:{this.state.loggedInStatus}</h1>
        <BrowserRouter>
          <Navbar
            loggedInStatus={this.state.loggedInStatus}
            handleCallback={(status) => {
              // Sätter loggedInStatus till state.loggedInStatus
              this.setState({ loggedInStatus: status });
            }}
          />
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/Bookings" component={myBookings} />
            <Route exact path="/Book" component={Book} />
            <Route
              exact
              path="/Admin"
              render={(props) => (
                <AdminZone
                  {...props}
                  loggedInStatus={(status) => {
                    // Sätter loggedInStatus till state.loggedInStatus
                    this.setState({ loggedInStatus: status });
                  }}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default Approute;
