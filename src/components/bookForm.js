import React, { Component } from "react";
import {Link} from "react-router-dom";

class Form extends Component {
  state = { count: 1 };

  render() {
    return (
      <form>
        <div className={"input_container"}>
          <label>Ditt namn:</label>
          <input type={"text"} id={"customer_name"}></input>
        </div>
        <div className={"input_container"}>
          <label>Önskat datum:</label>
          <input type={"date"} id={"appointment_date"} />
        </div>
        <div className={"input_container"}>
          <label>Önskad tid:</label>

          <select name={"appointment_time"}>
            <option value={"0800"}>08:00</option>
            <option value={"0900"}>09:00</option>
            <option value={"1000"}>10:00</option>
            <option value={"1100"}>11:00</option>
            <option value={"1200"}>12:00</option>
            <option value={"1300"}>13:00</option>
            <option value={"1400"}>14:00</option>
            <option value={"1500"}>15:00</option>
          </select>
        </div>
        <div className={"input_container"}>
          <label>Ditt telefonnummer:</label>

          <input type={"number"} placeholder={"Telefonnummer"}></input>
        </div>

        <Link to="/Bookings" className={"button__success"}>Bekräfta</Link>
      </form>
    );
  }
}

export default Form;
