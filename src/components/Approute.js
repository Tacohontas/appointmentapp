import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Card from "./Card";
import App from "./App";
import NotFound from "./NotFound";
import Navbar from "./Navbar";
import Eventtest from "./Eventtest";

const Approute = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/> {/* Navbaren måste vara inuti React-router (browser-Router i vårt fall) */}
        <Route exact path="/"     component={App} ></Route> {/* Default eller landing. */}
        <Route exact path="/card" component={Card}></Route>
        <Route exact path="/*"    component={NotFound}></Route> {/* "/*" är var den ska hamna om man skriver in en route som ej finns. */}
        <Eventtest />
      </BrowserRouter>
    </div>
  );
};

export default Approute;
