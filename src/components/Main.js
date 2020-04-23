import React from "react";
import Card from "./Card";

const Main = () => {
  return (
    <div className={"main"}>
      <Card image={"tennis_1.jpg"} title={"Serveträning"} />
      <Card image={"tennis_2.jpg"} title={"Grundslagsträning"}/>
      <Card image={"tennis_3.jpg"} title={"Matchträning"}/>
      <Card image={"tennis_4.jpg"} title={"Nybörjarkurs"}/>
      {/* <Card image={"tennis_5.jpg"} />
      <Card image={"tennis_6.jpg"} />
      <Card image={"tennis_1.jpg"} />
      <Card image={"tennis_1.jpg"} /> */}

    </div>
  );
};

export default Main;