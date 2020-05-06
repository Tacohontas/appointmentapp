import React, {Component} from "react";
import axios from "axios";
import CardPreview from "../components/Card_preview";


class EditProducts extends Component{

    state={
        products: []
    }

    async componentDidMount() {
        axios.get("http://localhost:1337/products").then((res) => {
          this.setState({ products: res.data });
        });
      }


render(){
    return(
        <div className={"products_preview"}>
        {this.state.products.map((product) => (
          <CardPreview
            key={product.id}
            title={product.title}
            price={product.price}
            image={"http://localhost:1337" + product.image.url}
            btnStyle={"button__success"}
            label={"Ändra"}
            link={"/Edit"}
          />
        ))}
      </div>
    )
}
}

export default EditProducts;