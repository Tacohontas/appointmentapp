import React from "react";
import Card from "../components/Card_full";

const Booking = () => {
  return (
    <div>
      <Card image={"tennis_1.jpg"} title={"Serveträning"} link={"/Book"} desc={"Klockan 10:00"} label={"Ändra bokning"} />
    </div>
  );
};

export default Booking;
