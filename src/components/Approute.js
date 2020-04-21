import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Card from "./Card";
import Booking from "./Booking";
import App from "./App";
import Navbar from "./Navbar";

const Approute = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Route exact path="/" component={App}></Route>
        <Route exact path="/Bookings" component={Booking}></Route>
      </BrowserRouter>
    </div>
  );
};

export default Approute;
