import React, { Component } from "react";
import axios from "axios";

class Adminform extends Component {
  state = {
    title: "",
  };

  async onSubmitToApi(e) {
    e.preventDefault();


    this.setState({ title: e.target.elements.title.value });

    const res = await axios.post("http://localhost:1337/products", {
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
      price: e.target.elements.price.value,
      image: "tillfällig data"
    });

    /* --- Lägga till fil --- */
    const data = new FormData();
    data.append("files", e.target.elements.file.files[0]);

    const image = await axios.post("http://localhost:1337/upload", {
      image: data,
    });
    /* ---------------------- */


    console.log(res);
    console.log(image);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitToApi.bind(this)}>
          <input type="text" name="title" placeholder="title" />
          <input type="text" name="description" placeholder="description" />
          <input type="number" name="price" placeholder="price" />
          <input type="file" name="file" />
          <button>Spara</button>
          {this.state.title}
        </form>
      </div>
    );
  }
}

export default Adminform;
