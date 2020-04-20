import React from "react";

const Card = (props) => {
  return (
    <div className={"card"}>
      <img src={props.image} className={"card_img-top"} alt={"People"} />
      <div className={"card__body"}>
        <h3 className={"card__title"}>Serveträning</h3>
        <p className={"card__text"}>
         Träna upp din serve tillsammans med en av våra professionella tennistränare. 
        </p>
        <a href="#" className={"card__button"}>Boka</a>
      </div>
    </div>
  );
};

export default Card;
