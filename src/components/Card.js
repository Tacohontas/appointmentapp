import React from "react";
import {Link} from "react-router-dom";

const Card = (props) => {
  return (
    <div className={"card"}>
      <img src={props.image} className={"card_img-top"} alt={"People"} />
      <div className={"card__body"}>
        <h3 className={"card__title"}>{props.title}</h3>
        <p className={"card__text"}>
         Träna upp dina slag tillsammans med en av våra professionella tennistränare. 
        </p>
        <Link to="/Book" className={"card__button"}>Boka</Link>
      </div>
    </div>
  );
};

export default Card;
