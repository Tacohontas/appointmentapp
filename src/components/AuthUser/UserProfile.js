import React, { Component } from "react";
import firebase from "../FirebaseConfig";
import { Link } from "react-router-dom";

class UserProfile extends Component {
  state = {
    providerId: null,
    providerUId: null,
    displayName: null,
    email: null,
    profilePicture: null,
    test: null
  };

  logOut() {
    localStorage.clear();
    firebase.auth().signOut();
    window.location.reload(false);
  }

  componentDidMount() {
    var user = firebase.auth().currentUser;
    
    this.setState({
      providerId: user.providerId,
      providerUId: user.uid,
      displayName: user.displayName,
      email: user.email,
      profilePicture: user.photoURL,
    });    
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
        console.log(error);
      });
  }

  render() {
    return (
      <div className="userprofile">
        <h1>{this.state.email}</h1>
        <Link to="/Bookings" className="button__secondary">Mina bokningar</Link>
        <button className="button__secondary">Change username</button>
        <button className="button__secondary">Change password</button>
        <button className="button__secondary">Change email</button>
        <button className="button__secondary">Change profile picture</button>
        <button className="button__secondary" onClick={this.logOut.bind(this)}> Logout</button>
        <button className="button__warning"   onClick={this.deleteAccount.bind(this)}>Delete Account</button>
      </div>
    );
  }
}

export default UserProfile;
