import React, { Component } from "react";
import AdminLogin from "../components/Auth/AdminLogin";
import AdminProfile from "../components/Auth/AdminProfile";

// Renderar adminlogin eller adminprofile baserat på state

class AdminZone extends Component {
  state = {
    user: null || localStorage.getItem("jwt"),
    jwt: null || localStorage.getItem("user"),
  };

//   componentDidUpdate(){
//     window.location.reload(false);
    
//   }

  render() {
    const loggedIN = this.state.user || this.state.jwt;
    return (
      <div>
        {!loggedIN ? ( // Om Admin ej är inloggad
          <AdminLogin
            userCredential={(e, jwt) => {
              // Sätter userinfo till state.user och jwt till state.jwt
              this.setState({ user: e, jwt: jwt });
              // Sätter state.jwt till localStorage(jwt)
              localStorage.setItem("jwt", this.state.jwt);
              // Sätter state.user till localStorage(user)
              localStorage.setItem("user", this.state.user);
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
