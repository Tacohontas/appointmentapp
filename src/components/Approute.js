import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import myBookings from "../pages/myBookings";
import App from "./App";
import Navbar from "./Navbar";
import Book from "../pages/Book";
import Adminform from "./Adminform";


const Approute = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Route exact path="/" component={App}/>
        <Route exact path="/Bookings" component={myBookings}/>
        <Route exact path="/Book" component={Book}/>
        <Route exact path="/Admin" component={Adminform} />
      </BrowserRouter>
    </div>
  );
};

export default Approute;
