import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



const InfoPage = props =>{ 
    console.log("infopage: ", props.children);
return (
    <div>
        {props.children}
    </div>
)
}

export default InfoPage;