import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";


import faker from "faker"; // dummydata från fakerjs
import "../styles/_app.scss";



const App = () => {
    return(
        <div className={"app"}>
            <Navbar />
            <Main />
        </div>
    )
}

export default App;