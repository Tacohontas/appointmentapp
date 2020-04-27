import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import myBookings from "../pages/myBookings";
import App from "./App";
import Navbar from "./Navbar";
import Book from "../pages/Book";
import Apitest from "./Apitest";


const Approute = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Route exact path="/" component={App}></Route>
        <Route exact path="/Bookings" component={myBookings}></Route>
        <Route exact path="/Book" component={Book}></Route>
        <Apitest />
      </BrowserRouter>
    </div>
  );
};

export default Approute;
