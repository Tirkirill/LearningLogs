import React from "react";
import Courses from "./components/main/courses/courses.jsx";
import Navbar from "./components/main/navbar.jsx";
import Users from "./components/main/users/users.jsx";
import CoursePage from "./components/main/courses/coursePage.jsx";
import UserPage from "./components/main/users/userPage.jsx";
import * as API from "./backend/API";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { history } = this.props;
        return(
            <Router>
                <Navbar/>
                <Route exact path="/" history={history}>
                    <Courses />
                </Route>
                <Route exact path="/users" history={history}>
                    <Users/>
                </Route>
                <Route exact path="/course/:id" history={history}>
                    <CoursePage/>
                </Route>
                <Route exact path="/user/:id" history={history}>
                    <UserPage/>
                </Route>
            </Router>
        )
    }
}

export default App;