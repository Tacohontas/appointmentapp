import React from "react";
import { Link } from "react-router-dom";

const CardPreview = (props) => {
  return (
    <div className={"card__preview"}>
      <div className={"card__body"}>
        <h3 className={"card__title"}>{props.title}</h3>
        <p className={"card__price"}>{props.price}kr</p>
        <Link to={props.link} className={props.btnStyle}>
          {props.label}
        </Link>
      </div>
    </div>
  );
};

export default CardPreview;
