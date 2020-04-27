import React, { Component } from "react";
import Card from "../components/Card";
import axios from "axios";

class Main extends Component {
  state = {
    products: [],
  };

  onClickApi() {
    axios.get("http://localhost:1337/products").then((res) => {
      this.setState({ products: res.data });
    });
  }

  render() {
    return (
      <div className={"main"}>
        {this.state.products.map((product) => (
          <Card
            image={"http://localhost:1337"+ product.image.formats.thumbnail.url}
            title={product.title}
            desc={product.description}
            price={product.price}
            label={"Boka"}
            link={"/Book"}
          />
        ))}

        <button onClick={this.onClickApi.bind(this)}>Hämta</button>
      </div>
    );
  }
}

export default Main;
