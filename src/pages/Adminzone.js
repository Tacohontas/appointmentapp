import React, { Component } from "react";
import AdminLogin from "../components/Authentication/AdminLogin";
import AdminProfile from "../components/Authentication/AdminProfile";

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
