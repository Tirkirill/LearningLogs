import React from "react";

const users = [
    {
        id:"2",
        name:"Jhon",
        createdAt:new Date(2002, 2,2)
    },
    {
        id:"1",
        title:"James",
        createdAt:new Date(2002, 2,2)
    },
    {
        id:"3",
        title:"Kirill",
        createdAt:new Date(2002, 2,2)
    },
    {
        id:"4",
        title:"Aaron",
        createdAt:new Date(2002, 2,2)
    }
]


class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="mainContainer">Пользователи</div>
        )
    }
}

export default Users;