import React, { Component } from "react";
import firebase from "../FirebaseConfig";
import axios from "axios";

// Register and login information

class UserLogin extends Component {
  state = {
    condition: true, // Defaultvärde true
  };

  onClickNav(e) {
    if (this.state.condition !== false) {
      this.setState({ condition: false });
      e.target.innerHTML = "Already have an account?";
    } else {
      this.setState({ condition: true });
      e.target.innerHTML = "Dont have an account?";
    }
  }

  onSubmitRegister(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const displayName = e.target.elements.username.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        res.user.sendEmailVerification();
        this.props.userCredential(res.user.email);
        this.props.showDisplayName(displayName);
      });
  }

  onSubmitLogin(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => this.props.userCredential(res.user.email));
  }

  resetPassword(e) {
    e.preventDefault();
    var auth = firebase.auth();
    var emailAddress = e.target.elements.resetEmail.value;
    
    auth
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        // Email sent.
      })
      .catch(function (error) {
        // An error happened.
      });
  }

  render() {
    return (
      <div>
        {this.state.condition && ( // Om state.condition == true
          <div>
            <form
              onSubmit={this.resetPassword.bind(this)}
              className={"input_container"}
            >
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <button className={"button__success"}>Login</button>
            </form>
            <form onSubmit={this.onSubmitLogin.bind(this)}>
              <input type="email" name="resetEmail"></input>
              <button>Reset password</button>
            </form>
          </div>
        )}

        {!this.state.condition && ( // Om state.condition == false
          <form onSubmit={this.onSubmitRegister.bind(this)}>
            <input type="text" name="username" placeholder="Username" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button className={"button__success"}>Register</button>
          </form>
        )}

        <button
          className={"button__secondary"}
          onClick={this.onClickNav.bind(this)}
        >
          Dont have an account?
        </button>
      </div>
    );
  }
}

export default UserLogin;
