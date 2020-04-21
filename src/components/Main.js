import React from "react";
import Card from "./Card";
import Form from "./Form";

const Main = () => {
  return (
    <div className={"main"}>
      <Card image={"tennis_1.jpg"} />
      <Card image={"tennis_2.jpg"} />
      <Card image={"tennis_3.jpg"} />
      <Card image={"tennis_4.jpg"} />
    <Form />
    </div>
  );
};

export default Main;