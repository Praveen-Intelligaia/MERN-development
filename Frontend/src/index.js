import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import Home from "./Home";

ReactDOM.render(
    
    <BrowserRouter>
        <App />
        </BrowserRouter>,
        // <div>
        //     <home/>
        // </div>,
  

    document.getElementById("root")
);

serviceWorker.unregister();