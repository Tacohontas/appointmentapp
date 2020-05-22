import React, { Component } from "react";
import firebase from "../FirebaseConfig";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import UserProfile from "./UserProfile";

// Register and login information

class UserLogin extends Component {
  state = {
    condition: true, // Defaultvärde true
    user: "",
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /userprofile after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/userprofile",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user.email }); // ES6 shortcut: ({ user: user }) = ({user})
      }
    });
  }

  onClickNav(e) {
    if (this.state.condition !== false) {
      this.setState({ condition: false });
      e.target.innerHTML = "Already have an account?";
    } else {
      this.setState({ condition: true });
      e.target.innerHTML = "Dont have an account?";
    }
  }

  onSubmitLogin(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  onSubmitRegister(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const displayName = e.target.elements.username.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password) // Skapar användare i firebase med email, pw
      .then((res) => {
        res.user.sendEmailVerification(); // Skickar en email-verifikation.
        // this.props.userCredential(res.user.email); // Skickar tillbaka användarens mail i vår callbackprops
        // this.props.showDisplayName(displayName); // Skickar tillbaka användarens displaynem i vår callbackprops
      });
  }

  resetPassword(e) {
    e.preventDefault();
    var auth = firebase.auth();
    var emailAddress = e.target.elements.resetEmail.value;

    auth
      .sendPasswordResetEmail(emailAddress) // Skickar ett reset pw-mail till adress i input:mail
      .then(function () {
        // Email sent.
        console.log("Email sent");
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
            {/* Login */}
            <form
              onSubmit={this.onSubmitLogin.bind(this)}
              className={"input_container"}
            >
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <button className={"button__success"}>Login</button>
            </form>

            {/* Reset password */}
            <form onSubmit={this.resetPassword.bind(this)}>
              <input type="email" name="resetEmail"></input>
              <button>Reset password</button>
            </form>
          </div>
        )}

        {!this.state.condition && ( // Om state.condition == false
          <div>
            {/* Register */}
            <form onSubmit={this.onSubmitRegister.bind(this)}>
              <input type="text" name="username" placeholder="Username" />
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <button className={"button__success"}>Register</button>
            </form>

            {/* Firebase UI-login */}
            <div>or</div>
            <div>
              <h1>My App</h1>
              <p>Please sign-in:</p>
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
            {this.state.user ? (
              <UserProfile userData={this.state.user} />
            ) : (
              <div>else</div>
            )}
          </div>
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
