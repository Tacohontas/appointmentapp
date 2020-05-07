import React, { Component } from "react";
import axios from "axios";
// import CardPreview from "../components/Card_preview";

class EditProducts extends Component {
  state = {
    products: [],
    chosenProduct: [],
    status: null,
  };

  async componentDidMount() {
    axios.get("http://localhost:1337/products").then((res) => {
      this.setState({ products: res.data });
      console.log(Object.keys(this.state.chosenProduct).length);
    });
  }
  componentDidUpdate() {
    if (Object.keys(this.state.chosenProduct).length > 0) {
      document.querySelector(
        'input[name="title"]'
      ).value = this.state.chosenProduct.title;
      document.querySelector(
        'textarea[name="description"]'
      ).value = this.state.chosenProduct.description;
      document.querySelector(
        'input[name="price"]'
      ).value = this.state.chosenProduct.price;
    }
  }

  onClickChosenProduct(e) {
    let chosenProductId = e.target.getAttribute("data-key");
    axios
      .get("http://localhost:1337/products/" + chosenProductId)
      .then((res) => {
        this.setState({ chosenProduct: res.data });
        // console.log(res.data);
      });
  }

  onClickAbort() {
    this.setState({ chosenProduct: [] });
  }

  onClickDelete(e) {
    const chosenProductId = e.target.getAttribute("data-key");
    // Authenticate then delete chosenProduct from state
    axios
      .delete("http://localhost:1337/products/" + chosenProductId)
      .then((response) => {
        console.log("Well done");
        console.log(response);
        console.log(response.status);
        this.setState({ chosenProduct: [] });
      })
      .catch((error) => {
        console.log("An error occurred", error);
      });
  }

  async onSubmitToApi(e) {
    e.preventDefault();

    axios
      .put("http://localhost:1337/products/" + e.target.elements.id.value, {
        title: e.target.elements.title.value,
        description: e.target.elements.description.value,
        price: e.target.elements.price.value,
      })
      .then((response) => {
        // Handle success
        console.log("Well done");
        console.log(response);
        console.log(response.status);
        this.setState({ status: response.status });
      })
      .catch((error) => {
        console.log("An error occurred", error);
        // console.log(data);
      });
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.chosenProduct).length === 0 && (
          <div className={"products_preview"}>
            {this.state.products.map((product) => (
              <div className={"card__preview"} key={product.id}>
                <div className={"card__body"}>
                  <h3 className={"card__title"}>{product.title}</h3>
                  <p className={"card__price"}>{product.price}kr</p>
                  <button
                    className={"button__success"}
                    onClick={this.onClickChosenProduct.bind(this)}
                    data-key={product.id}
                  >
                    ändra
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {Object.keys(this.state.chosenProduct).length > 0 && (
          <div>
            <h1>Chosen product</h1>
            <form onSubmit={this.onSubmitToApi.bind(this)}>
              <img
                src={
                  "http://localhost:1337" + this.state.chosenProduct.image.url
                }
                className={"card_img-top"}
                alt={"People"}
              />
              <input
                type="hidden"
                name="id"
                value={this.state.chosenProduct.id}
              />
              <input type="text" name="title" placeholder={"Enter new title"} />
              <textarea
                rows="5"
                type="text"
                name="description"
                placeholder={"Enter new description"}
              />
              <input
                type="number"
                name="price"
                placeholder={"Enter new price"}
              />

              <button className={"button__success"}>Spara ändringar</button>
            </form>
            <button
              className={"button__secondary"}
              onClick={this.onClickAbort.bind(this)}
            >
              Tillbaka
            </button>
            <button
              className={"button__warning"}
              onClick={this.onClickDelete.bind(this)}
              data-key={this.state.chosenProduct.id}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default EditProducts;
