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
    editInfo: false,
    errorMsg: null,
    imageToUpload: null,
  };

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

  componentDidUpdate() {
    // if (this.state.editInfo === "USER_INFO") {
    //   document.querySelector(
    //     'input[name="username"]'
    //   ).value = this.state.displayName;
    // }
    // if(this.state.editInfo === "EMAIL"){
    //   document.querySelector('input[name="email"]').value = this.state.email;
    // }
  }

  onClickEditable() {
    this.state.editInfo
      ? this.setState({ editInfo: false })
      : this.setState({ editInfo: true });
  }

  onClickEditUserInfo() {
    this.setState({ editInfo: "USER_INFO" });
  }
  onClickEditUserEmail() {
    this.setState({ editInfo: "EMAIL" });
  }
  onClickEditUserPw() {
    this.setState({ editInfo: "PASSWORD" });
  }

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
        console.log(error);
      });
  }

  async onSubmitUpdateProfile(e) {
    e.preventDefault();
    console.log("submit");

    console.log(e);

    var user = firebase.auth().currentUser;

    if (this.state.editInfo === "USER_INFO") {
      const fileInput = document.querySelector("#img__upload");

      if (!fileInput.disabled) {
        // fileInput is disabled if we don't want to update image.
        // Upload image
        console.log("input isnt disabled");

        const formData = new FormData();
        formData.append("files", this.state.image);
        formData.append("ref", "product"); // Refererar till table
        formData.append("refId", e.target.elements.id.value); // Hämtat post-id från vår post vi skapade.
        formData.append("field", "image"); // Refererar till column i vår table

        // upload here
      }

      // UPDATE PHOTO ASWELL
      user
        .updateProfile({
          displayName: e.target.elements.username.value,
        })
        .then(function () {
          // Update successful.
          console.log("displayname updated");
        })
        .catch(function (error) {
          // An error happened.
          console.log(error);
          // this.props.dataFromUserProfile(error.message);
        });
    }

    if (this.state.editInfo === "EMAIL") {
      let passwordInput = document.querySelector('input[name="password"]')
        .value;
      let emailInput = document.querySelector('input[name="email"]').value;

      let credentials = firebase.auth.EmailAuthProvider.credential(
        user.email,
        passwordInput
      );

      user
        .reauthenticateWithCredential(credentials)
        .then(function () {
          user
            .updateEmail(emailInput)
            .then(function () {
              // Update successful.
              console.log("email updated");
            })
            .catch(function (error) {
              // An error happened.
              console.log(error);
            });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    if (this.state.editInfo === "PASSWORD") {
      // update password
      var newPassword = document.querySelector('input[name="new_password"]')
        .value;
      let oldPassword = document.querySelector('input[name="old_password"]')
        .value;

      let credentials = firebase.auth.EmailAuthProvider.credential(
        user.email,
        oldPassword
      );

      if (newPassword.length > 0) {
        if (newPassword.length > 6) {
          // Reauthenticate
          user
            .reauthenticateWithCredential(credentials)
            .then(function () {
              // Update password
              user
                .updatePassword(newPassword)
                .then(function () {
                  // Update successful.
                  console.log("password updated");
                })
                .catch(function (error) {
                  // An error happened.
                  console.log(error.message);
                });
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
    }
  }

  onClickEnableUpload() {
    const fileInput = document.querySelector("#img__upload");
    fileInput.disabled = false;
  }

  onImgUploadChange(e) {
    // Put image in state
    this.setState({ imageToUpload: e.target.files[0] });

    // Preview image
    let previewOutput = document.querySelector(".card_img-top");
    previewOutput.src = URL.createObjectURL(e.target.files[0]);
  }

  changePassword() {
    var user = firebase.auth().currentUser;
    var newPassword = document.querySelector('input[name="password"]');

    if (newPassword.value.length > 0) {
      if (newPassword.value.length > 6) {
        user
          .updatePassword(newPassword.value)
          .then(function () {
            // Update successful.
            console.log("password updated");
          })
          .catch(function (error) {
            // An error happened.
            console.log(error.message);
          });
      }
    }
  }

  changeEmail() {
    var user = firebase.auth().currentUser;
    let inputEmail = document.querySelector('input[name="email"]');

    user
      .updateEmail(inputEmail.value)
      .then(function () {
        // Update successful.
        console.log("email updated");
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
  }

  render() {
    return (
      <div className="userprofile">
        {this.state.editInfo === false && (
          <div className="userprofile__info">
            <h1>{this.props.dataToUserProfile}</h1>
            {!!this.state.profilePicture ? (
              <img src={this.state.profilePicture} alt="profilbild" />
            ) : (
              "ingen profilbild vald"
            )}
            <h4>Användarnamn: {this.state.displayName || "inget valt"}</h4>
            <h4>E-post: {this.state.email}</h4>
            <button
              className="button__secondary"
              onClick={this.onClickEditUserInfo.bind(this)}
            >
              Ändra användarinfo
            </button>
            <button
              className="button__secondary"
              onClick={this.onClickEditUserEmail.bind(this)}
            >
              Uppdatera e-post
            </button>
            <button
              className="button__secondary"
              onClick={this.onClickEditUserPw.bind(this)}
            >
              Ändra lösenord
            </button>
            <Link to="/Bookings" className="button__secondary">
              Mina bokningar
            </Link>
            <button
              className="button__secondary"
              onClick={this.logOut.bind(this)}
            >
              Logga ut
            </button>
            <button
              className="button__warning"
              onClick={this.deleteAccount.bind(this)}
            >
              Ta bort konto
            </button>
          </div>
        )}

        {this.state.editInfo === "USER_INFO" && (
          <form
            className={"input_container"}
            onSubmit={this.onSubmitUpdateProfile.bind(this)}
          >
            <img
              src={this.state.profilePicture}
              className={"card_img-top"}
              alt={""}
            />
            <label
              htmlFor={"img__upload"}
              className={"button__secondary"}
              onClick={this.onClickEnableUpload.bind(this)}
            >
              Ändra bild
            </label>
            <input
              id={"img__upload"}
              type="file"
              name="file"
              onChange={this.onImgUploadChange.bind(this)}
              disabled
            />
            <input
              type="username"
              name="username"
              placeholder="Nytt användarnamn"
            />

            <button
              className={"button__secondary"}
              onClick={this.onClickEditable.bind(this)}
            >
              Avbryt
            </button>
            <button className={"button__success"}>Spara</button>
          </form>
        )}

        {this.state.editInfo === "EMAIL" && (
          <form
            className={"input_container"}
            onSubmit={this.onSubmitUpdateProfile.bind(this)}
          >
            <input type="username" name="email" placeholder="Ny e-post" />
            <input
              type="password"
              name="password"
              placeholder="Skriv in ditt lösenord"
            />

            <button
              className={"button__secondary"}
              onClick={this.onClickEditable.bind(this)}
            >
              Avbryt
            </button>
            <button className={"button__success"}>Spara</button>
          </form>
        )}

        {this.state.editInfo === "PASSWORD" && (
          <form
            className={"input_container"}
            onSubmit={this.onSubmitUpdateProfile.bind(this)}
          >
            <input
              type="password"
              name="new_password"
              placeholder="Nytt lösenord"
            />
            <input
              type="password"
              name="old_password"
              placeholder="Ditt gamla lösenord"
            />

            <button
              className={"button__secondary"}
              onClick={this.onClickEditable.bind(this)}
            >
              Avbryt
            </button>
            <button className={"button__success"}>Spara</button>
          </form>
        )}
      </div>
    );
  }
}

export default UserProfile;
