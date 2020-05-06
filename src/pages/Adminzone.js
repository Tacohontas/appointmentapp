import React, { Component } from "react";
import AdminLogin from "../components/Auth/AdminLogin";
import AdminProfile from "../components/Auth/AdminProfile";

// Renderar adminlogin eller adminprofile

class AdminZone extends Component {
  state = {
    user: true,
  };

  render() {
    return (
      <div>
        visa admin login
        <AdminLogin />
        eller visa adminprofile
        <AdminProfile userInfo={(e) => console.log(e)} />
      </div>
    );
  }
}

export default AdminZone;
