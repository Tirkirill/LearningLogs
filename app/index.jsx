import React from "react";
import ReactDom from "react-dom";
import "./styles/main.scss";
import {createBrowserHistory} from 'history'
import App from "./app.jsx";
const history = createBrowserHistory();

ReactDom.render(<App history={history}/>, document.getElementById("root"));