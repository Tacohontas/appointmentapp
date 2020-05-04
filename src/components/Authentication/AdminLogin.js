import React, { Component } from "react";
import axios from "axios";

class AdminLogin extends Component {
  state = {
    condition: true, // Defaultvärde true
  };

  onClickNav(e) {
    if (this.state.condition !== false) {
      this.setState({ condition: false });
      e.target.innerHTML = "Already have an account!";
    } else {
      this.setState({ condition: true });
      e.target.innerHTML = "Dont have an account?";
    }
  }

  onSubmitRegister(e) {
    e.preventDefault();
    axios
      .post("http://localhost:1337/auth/local/register", {
        username: e.target.elements.username.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
      .then((response) => {
        console.log("Well done");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        console.log("An error occurred", error);
      });
  }

  onSubmitLogin(e){
    e.preventDefault();
    axios
      .post("http://localhost:1337/auth/local/", {
        identifier:  e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
      .then((response) => {
        console.log("Well done");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        console.log("An error occurred", error);
      });
  };

  render() {
    return (
      <div>
        {this.state.condition && ( // Om state.condition == true
          <form onSubmit={this.onSubmitLogin.bind(this)}>
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="Password" />
            <button>Login</button>
          </form>
        )}

        {!this.state.condition && ( // Om state.condition == false
          <form onSubmit={this.onSubmitRegister.bind(this)}>
            <input type="text" name="username" placeholder="username" />
            <input type="email" name="email" placeholder="register email" />
            <input
              type="password"
              name="password"
              placeholder="register Password"
            />
            <button>Register</button>
          </form>
        )}

        <button onClick={this.onClickNav.bind(this)}>
          Dont have an account?
        </button>
      </div>
    );
  }
}

export default AdminLogin;
