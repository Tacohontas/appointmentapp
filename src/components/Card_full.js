import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={"card"}>
      <img src={props.image} className={"card_img-top"} alt={"People"} />
      <div className={"card__body"}>
        <h3 className={"card__title"}>{props.title}</h3>
        <p className={"card__text"}>{props.desc}</p>
        <p className={"card__price"}>{props.price}kr</p>
        <Link to={props.link} className={"button__success"}>
          {props.label}
        </Link>
      </div>
    </div>
  );
};

export default Card;
