import React, { Component } from "react";
import AdminLogin from "../components/Auth/AdminLogin";
import AdminProfile from "../components/Auth/AdminProfile";

// Renderar adminlogin eller adminprofile baserat på state

class AdminZone extends Component {
  state = {
    user: null || localStorage.getItem("jwt"),
    jwt: null || localStorage.getItem("user"),
  };

  render() {
    const loggedIN = this.state.user || this.state.jwt;
    return (
      <div>
        <h1>Status: {this.props.loggedInStatus}</h1>
        {!loggedIN ? ( // Om Admin ej är inloggad
          <AdminLogin
            userCredential={(e, jwt) => {
              // Sätter userinfo till state.user och jwt till state.jwt
              this.setState({ user: e, jwt: jwt });
              // Sätter state.jwt till localStorage(jwt)
              localStorage.setItem("jwt", this.state.jwt);
              // Sätter state.user till localStorage(user)
              localStorage.setItem("user", this.state.user);

              // TEST - skicka tillbaka jwt som props till Approute 
              this.props.loggedInStatus(localStorage.getItem("jwt"));
            }}
          />
        ) : (
          // Om Admin är inloggad
          <AdminProfile userData={this.state.user} />
        )}
      </div>
    );
  }
}

export default AdminZone;
