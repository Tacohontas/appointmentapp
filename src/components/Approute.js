import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import myBookings from "../pages/myBookings";
import App from "./App";
import AdminForm from "./Upload";
import Navbar from "./Navbar";
import Book from "../pages/Book";
import AdminZone from "../pages/Adminzone";
import EditProducts from "../pages/EditProducts";

class Approute extends Component {
  state = {
    loggedInStatus: null,
    user: null,
  };

  componentDidMount() {
    console.log("approute mounted");
    this.setState({ loggedInStatus: localStorage.getItem("jwt") });
  }

  componentDidUpdate() {
    console.log("approute updated");
  }

  render() {
    return (
      <div>
        {/* <h1>from state:{this.state.loggedInStatus}</h1> */}
        <BrowserRouter>
          <Navbar
            loggedInStatus={this.state.loggedInStatus}
            // Sätter loggedInStatus till state.loggedInStatus
            handleCallback={(status) => {
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
                    // Hämtar loggedInStatus (som är jwt) från adminlogin till state.loggedInStatus
                    this.setState({ loggedInStatus: status });
                  }}
                />
              )}
            />
            <Route exact path="/Products" component={EditProducts} />
            <Route exact path="/Create" component={AdminForm} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default Approute;
