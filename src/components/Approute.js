import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import myBookings from "../pages/myBookings";
import App from "./App";
import Navbar from "./Navbar";
import Book from "../pages/Book";
import AdminZone from "../pages/Adminzone";
// import ParentComponent from "./test/ParentComponent";
// import Adminsida from "./test/Adminsida";

const Approute = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/Bookings" component={myBookings} />
          <Route exact path="/Book" component={Book} />
          <Route exact path="/Admin" component={AdminZone} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Approute;
