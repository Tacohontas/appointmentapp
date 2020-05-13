import React, { Component } from "react";
import UserProfile from "./UserProfile";
import UserLogin from "./UserLogin";

class UserPage extends Component {
  state = {
    user: null || localStorage.getItem("user"),
  };
  callback;

  render() {
    const loggedIn = this.state.user || localStorage.getItem("user");
    return (
      <div>
        {!loggedIn ? (
          <UserLogin
            userCredential={(user) => {
              this.setState({ user: user });
              localStorage.setItem("user", this.state.user);
            }}
          />
        ) : (
          <UserProfile userData={this.state.user} />
        )}
      </div>
    );
  }
}

export default UserPage;
