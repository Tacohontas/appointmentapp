import React, { Component } from "react";
import axios from "axios";
import CardPreview from "../Card_preview";
import Adminform from "../Upload";
import EditProducts from "../../pages/EditProducts";

// När admin är inloggad kommer hen hit

class AdminProfile extends Component {
  state = {
    products: [],
    view: null,
  };

  onClickChangeState(e) {
    this.setState({ view: e.target.getAttribute("data-type") });
  }

  render() {
    return (
      <div className={"adminprofile_body"}>
        <button
          className={"button__secondary"}
          onClick={this.onClickChangeState.bind(this)}
          data-type="edit"
        >
          Redigera produkter
        </button>
        <button
          className={"button__secondary"}
          onClick={this.onClickChangeState.bind(this)}
          data-type="create"
        >
          Skapa produkt
        </button>

        {this.state.view === "edit" && <EditProducts /> // Om view = edit
        }

        {this.state.view === "create" && <Adminform /> // Om view = edit
        }

        {console.log(this.state.view)}
      </div>
    );
  }
}

export default AdminProfile;
