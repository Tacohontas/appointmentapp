import React, { Component } from "react";
import UserProfile from "./UserProfile";
import UserLogin from "./UserLogin";
import firebase from "../FirebaseConfig";

class UserPage extends Component {
  state = {
    user: null || localStorage.getItem("user"),
    displayName: ""
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
            showDisplayName={(username) => {

              firebase.auth().onAuthStateChanged((user) => {
                user
                  .updateProfile({
                    displayName: username,
                  })
                  .then(() => {
                    this.setState({
                      displayName: user.displayName,
                    });
                  });
              });
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
