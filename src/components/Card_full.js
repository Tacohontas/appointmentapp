import React, { Component } from "react";
import BookFormModal from "./Modals/BookFormModal";

class Card extends Component {
  state = {
    openModal: false,
  };

  openModalEvent() {
    this.setState({ openModal: !this.state.openModal });
  }

  closeModalEvent() {
    this.setState({ openModal: false });
  }
  render() {
    return (
      <>
        <BookFormModal
          openModal={this.state.openModal}
          closeModal={this.closeModalEvent.bind(this)}
          productId={this.props.docId}
          title={this.props.title}
          desc={this.props.desc}
          price={this.props.price}
        />
        <div className={"card"}>
          <img
            src={this.props.image}
            className={"card_img-top"}
            alt={"People"}
          />
          <div className={"card__body"}>
            <h3 className={"card__title"}>{this.props.title}</h3>
            <p className={"card__text"}>{this.props.desc}</p>
            <p className={"card__price"}>{this.props.price}kr</p>
            <button
              className={"button__success"}
              onClick={this.openModalEvent.bind(this)}
            >
              {this.props.label}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
