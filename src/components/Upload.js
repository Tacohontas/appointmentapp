import React, { Component } from "react";
import axios from "axios";

class Upload extends Component {
  state = {
    image: "",
    status: null,
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

    // const resPic = await axios.post("http://localhost:1337/upload", data);
   

    axios
      .post("http://localhost:1337/upload", data)
      .then((response) => {
        // Handle success
        console.log("Well done");
        console.log(response);
        console.log(response.status);
        this.setState({status: response.status})
        console.log("from state:", this.state.status);
        
      })
      .catch((error) => {
        console.log("An error occurred", error);
      });
    
  }

  eventChange(e) {
    this.setState({ image: e.target.files[0] });
  }

  render() {
    return (
      <div>
        
        <form onSubmit={this.onSubmitToApi.bind(this)}>
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="description" placeholder="Description" />
          <input type="number" name="price" placeholder="Price" />
          <input
            type="file"
            name="file"
            onChange={this.eventChange.bind(this)}
          />
          <button className={"button__success"}>Create product</button>
        </form>

        {this.state.status === 200 && (<h3>Product uploaded!</h3>)}
      </div>
    );
  }
}

export default Upload;
