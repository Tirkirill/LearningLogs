import React from "react";

const cours = [
    {
        id:"1",
        title:"First course",
        createdAt:"20.02.2002"
    },
    {
        id:"2",
        title:"Second course",
        createdAt:"20.02.2002"
    }
]


class Courses extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="mainContainer">
                <table>
                    <tr>
                        <th style={{width:"5vw"}}></th>
                        <th style={{width:"5vw"}}>id</th>
                        <th>Название</th>
                        <th>Создан</th>
                    </tr>
                    {cours.map((course)=>
                        <tr key={course.id}>
                            <td>
                                <input type="checkbox"></input>
                            </td>
                            <td>{course.id}</td>
                            <td>{course.title}</td>
                            <td>{course.createdAt}</td>
                        </tr>                    
                    )}
                </table>
            </div>
        )
    }
}

export default Courses;