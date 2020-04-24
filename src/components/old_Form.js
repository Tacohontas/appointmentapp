import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerName: undefined,
      appointmentTime: undefined,
      mobile: undefined,
    };
  }

  handleOnChangeName = (e) => {
    this.setState({ customerName: e.target.value });
  };
  handleOnChangeTime = (e) => {
    this.setState({ appointmentTime: e.target.value });
  };
  handleOnChangeMobile = (e) => {
    this.setState({ mobile: e.target.value });
  };

  // Skapa en metod
  handleOnSubmit(e) {
    e.preventDefault();
    // this.setState({});
  }

  // Uppdatera state med setState()

  // Form kommer att anropa metoden med hjälp av event

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type={"text"}
            placeholder={"Ange ditt namn"}
            onChange={this.handleOnChangeName}
          />
          <input
            type={"text"}
            placeholder={"Ange önskat datum"}
            onChange={this.handleOnChangeTime}
          />
          <input
            type={"number"}
            placeholder={"Ange ditt telefonnummer"}
            onChange={this.handleOnChangeMobile}
          />
          <button type={"submit"} onSubmit={this.handleOnSubmit}>
            Boka
          </button>

          <div>{this.state.customerName}</div>
          <div>{this.state.appointmentTime}</div>
          <div>{this.state.mobile}</div>
        </form>
      </div>
    );
  }
}

export default Form;
