import React from "react";
import Card from "../components/Card";

const DESC1 =
  "Träna upp din serve tillsammans med en av våra grymma tennistränare!";
const DESC2 =
  "Träna upp din forehand och backhand med en av våra duktiga tränare!";
const DESC3 = "Bli coachad av en erfaren tränare i en träningsmatch!";
const DESC4 = "Aldrig hållt en racket förut? Ingen fara! Vi hjälper dig!";

const Main = () => {
  return (
    <div className={"main"}>
      <Card
        image={"tennis_1.jpg"}
        title={"Serveträning"}
        link={"/Book"}
        label={"Boka"}
        desc={DESC1}
      />
      <Card
        image={"tennis_2.jpg"}
        title={"Grundslagsträning"}
        link={"/Book"}
        label={"Boka"}
        desc={DESC2}
      />
      <Card
        image={"tennis_3.jpg"}
        title={"Matchträning"}
        link={"/Book"}
        label={"Boka"}
        desc={DESC3}
      />
      <Card
        image={"tennis_4.jpg"}
        title={"Nybörjarkurs"}
        link={"/Book"}
        label={"Boka"}
        desc={DESC4}
      />
      {/* <Card image={"tennis_5.jpg"} />
      <Card image={"tennis_6.jpg"} />
      <Card image={"tennis_1.jpg"} />
      <Card image={"tennis_1.jpg"} /> */}
    </div>
  );
};

export default Main;
