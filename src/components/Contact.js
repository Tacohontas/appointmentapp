import React, { Component } from "react";
import firebase from "./FirebaseConfig";

export default class Contact extends Component {
  onSubmitForm(e) {
    e.preventDefault();
    const db = firebase.firestore();

    console.log(firebase.auth().currentUser.uid);

    if (firebase.auth().currentUser.uid) {
      db.collection("contactFormData")
        .doc(firebase.auth().currentUser.uid.toString())
        .collection("messages")
        .add({
          name: e.target.elements.name.value,
          email: e.target.elements.email.value,
          message: e.target.elements.textarea.value,
        });
    } else {
      // medd: skapa ett konto
      console.log("ELSE");
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm.bind(this)}>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="textarea" />
          <button>Kontakta </button>
        </form>
      </div>
    );
  }
}
