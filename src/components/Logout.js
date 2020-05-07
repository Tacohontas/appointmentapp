import React, { Component } from "react";
import { Link } from "react-router-dom";

const Logout = (props) => {
  function onClickLogOut() {
    localStorage.clear();
  }

  if (!!localStorage.getItem("user")) {
    return (
      <Link onClick={onClickLogOut} to="/">
        Logga ut
      </Link>
    );
  } else {
      return null;
  }
};

export default Logout;
