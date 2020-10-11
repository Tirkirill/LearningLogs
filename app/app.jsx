import React from "react";
import Courses from "./components/main/courses.jsx";
import Navbar from "./components/main/navbar.jsx";
import Users from "./components/main/users.jsx";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";



class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { history } = this.props;
        console.log(history);
        return(
            <Router>
                <Navbar/>
                <Route exact path="/" history={history}>
                    <Courses/>
                </Route>
                <Route exact path="/users" history={history}>
                    <Users/>
                </Route>
            </Router>
        )
    }
}

export default App;