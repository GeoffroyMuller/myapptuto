import Banana from "./Banana";
import React from "react";

function Test(props) {

    const {name} = props;
    const {children} = props;

    // return <h1>Bonjour {props.name}</h1>
    return <React.StrictMode>
        <h1>Bonjour {name} {children} </h1>
        <Banana start={10} step={3}/>
    </React.StrictMode>
}

export default Test;
