import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    NavLink
} from "react-router-dom";

const Navbar = ()=> (
    <div className="navbar">
        <div className="navLinkContainer">
            <NavLink className="navLink" to="/">Курсы</NavLink>
            <NavLink className="navLink" to="/users">Пользователи</NavLink>
        </div>
    </div>
)

export default Navbar;