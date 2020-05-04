import React, { Component } from "react";
import axios from "axios";

class Adminform extends Component {
  state = {
    image: "",
  };

  async onSubmitToApi(e) {
    e.preventDefault();

    /* --- Lägga till post (utan bild) --- */

    const res = await axios.post("http://localhost:1337/products", {
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
      price: e.target.elements.price.value,
    });

    /* --- Ladda upp bild och referera till post --- */
    const data = new FormData();
    data.append("files", this.state.image);
    data.append("ref", "product"); // Refererar till table
    data.append("refId", res.data.id); // Hämtat post-id från vår post vi skapade.
    data.append("field", "image"); // Refererar till column i vår table

    const resPic = await axios.post("http://localhost:1337/upload", data);
    console.log(resPic);
  }

  eventChange(e) {
    this.setState({ image: e.target.files[0] });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitToApi.bind(this)}>
          <input type="text" name="title" placeholder="title" />
          <input type="text" name="description" placeholder="description" />
          <input type="number" name="price" placeholder="price" />
          <input
            type="file"
            name="file"
            onChange={this.eventChange.bind(this)}
          />
          <button>Spara</button>
        </form>
      </div>
    );
  }
}

export default Adminform;
