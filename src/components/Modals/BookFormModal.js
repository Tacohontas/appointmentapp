import React, { Component } from "react";
import firebase from "../FirebaseConfig";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    background: "#51639a",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

class BookFormModal extends Component {
  state = {
    user: false,
    msg: null,
    appointment_date: "",
    appointment_time: "",
    phone: ""

  };

  componentDidMount() {
    var user = firebase.auth().currentUser;
    if (user) {
      this.setState({ user: user.uid });
    }
  }

  handleOnChange = (e) => {
    console.log(`${e.target.name} : ${e.target.value}`);
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitToFirestore(e) {
    e.preventDefault();
    const db = firebase.firestore();
    const that = this;

    if (!!this.state.user) {
      db.collection("customerBookings")
        .add({
          user: this.state.user.toString(),
          productId: this.props.productId,
          productName: this.props.title,
          price: this.props.price,
          date: this.state.appointment_date,
          time: this.state.appointment_time,
          phone: this.state.phone,
        })
        .then(function (docRef) {
          // // console.log("Document written with ID: ", docRef.id);
          that.setState({ msg: "Bokningen lyckades!" });
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
          that.setState({ msg: "Bokningen kunde ej genomföras tyvärr!" });
        });
    } else{
        that.setState({ msg: "Du måste logga in för att kunna boka!"});

    }
  }

  render() {
    return (
      <>
        <Modal
          isOpen={this.props.openModal}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Booking Form"
          ariaHideApp={false}

        >
          <div className={"booking"}>
            {this.state.msg}
            <form onSubmit={this.onSubmitToFirestore.bind(this)}>
              <div className={"input_container"}>
                <p>Vald produkt: {this.props.title}</p>
              </div>
              <div className={"input_container"}>
                <label>Önskat datum:</label>
                <input
                  type={"date"}
                  id={"appointment_date"}
                  name={"appointment_date"}
                  onChange={this.handleOnChange}
                  value={this.state.appointment_date}
                  required
                />
              </div>
              <div className={"input_container"}>
                <label>Önskad tid:</label>

                <select
                  name={"appointment_time"}
                  onChange={this.handleOnChange}
                  value={this.state.appointment_time}
                >
                  <option value={"08:00"}>08:00</option>
                  <option value={"09:00"}>09:00</option>
                  <option value={"10:00"}>10:00</option>
                  <option value={"11:00"}>11:00</option>
                  <option value={"12:00"}>12:00</option>
                  <option value={"13:00"}>13:00</option>
                  <option value={"14:00"}>14:00</option>
                  <option value={"15:00"}>15:00</option>
                </select>
              </div>
              <div className={"input_container"}>
                <label>Ditt telefonnummer:</label>

                <input
                  type={"number"}
                  name={"phone"}
                  onChange={this.handleOnChange}
                  value={this.state.phone}
                ></input>
              </div>

              <button className={"button__success"}>Boka nu</button>
            </form>
          </div>
        </Modal>
      </>
    );
  }
}

export default BookFormModal;
