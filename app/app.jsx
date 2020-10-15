import React from "react";
import Courses from "./components/main/courses/courses.jsx";
import Navbar from "./components/main/navbar.jsx";
import Users from "./components/main/users/users.jsx";
import CoursePage from "./components/main/courses/coursePage.jsx";
import UserPage from "./components/main/users/userPage.jsx";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const courses = [
    {
        id:"2",
        title:"Second course",
        createdAt:new Date(2002, 3,2),
        studentsNumber:2
    },
    {
        id:"1",
        title:"First course",
        createdAt:new Date(2002, 2,4),
        studentsNumber:5
    },
    {
        id:"3",
        title:"NEW course!",
        createdAt:new Date(2002, 4,2),
        studentsNumber:2
    },
    {
        id:"4",
        title:"NEwNEW! course",
        createdAt:new Date(2002, 2,3),
        studentsNumber:12
    }
];
const users = [
    {
        id:"2",
        name:"Jhon",
        createdAt:new Date(2002, 2,2)
    },
    {
        id:"1",
        name:"James",
        createdAt:new Date(2002, 2,2)
    },
    {
        id:"3",
        name:"Kirill",
        createdAt:new Date(2002, 2,2)
    },
    {
        id:"4",
        name:"Aaron",
        createdAt:new Date(2002, 2,2)
    }
];


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { history } = this.props;
        return(
            <Router>
                <Navbar/>
                <Route exact path="/" history={history}>
                    <Courses values={courses}/>
                </Route>
                <Route exact path="/users" history={history}>
                    <Users values={users}/>
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