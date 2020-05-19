import React, { Component } from "react";
import firebase from "../FirebaseConfig";

class UserProfile extends Component {
  logOut() {
    localStorage.clear();
    window.location.reload(false);
    firebase.auth().signOut();
  }

  deleteAccount() {
    const userFromLocal = localStorage.getItem("user");
    var user = firebase.auth().currentUser;
    user
      .delete()
      .then(function () {
        //user deleted
        localStorage.clear();
        window.location.reload(false);
      })
      .catch(function (error) {
        // An error happend
      });
  }

  render() {
    return (
      <div>
        Profile info {this.props.userData}
        <button onClick={this.deleteAccount.bind(this)}>Delete Account</button>
        <button onClick={this.logOut.bind(this)}> Logout</button>
      </div>
    );
  }
}

export default UserProfile;
