import React, { Component } from "react";
import firebase from "../FirebaseConfig";

class UserProfile extends Component {
  logOut() {
    localStorage.clear();
    firebase.auth().signOut();
    window.location.reload(false);    
  }

  deleteAccount() {
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
