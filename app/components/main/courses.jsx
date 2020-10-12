import React from "react";

const cours = [
    {
        id:"2",
        title:"First course",
        createdAt:"20.02.2002"
    },
    {
        id:"1",
        title:"Second course",
        createdAt:"20.02.2002"
    }
]


class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: cours
        }
    }

    sortCoursesBy(e,key) {
        let newCourses;
        if (e.target.classList.contains("sortASC") 
            && e.target.classList.contains("chosen"))
        {
            newCourses = this.state.courses.sort((a,b)=>a[key]>b[key]?-1:1);
            e.target.classList.replace("sortASC", "sortDESC");
        }
        else if (e.target.classList.contains("sortDESC") 
                && e.target.classList.contains("chosen")) 
        {
            newCourses = this.state.courses.sort((a,b)=>a[key]>b[key]?1:-1);
            e.target.classList.replace("sortDESC", "sortASC");
        }
        else {
            let tableTitles = document.querySelectorAll("th");
            for (let th of tableTitles) {
                th.classList.remove("chosen");
                th.classList.replace("sortDESC", "sortASC");
            }
            newCourses = this.state.courses.sort((a,b)=>a[key]>b[key]?1:-1);
            e.target.classList.add("chosen");
        }
        this.setState({
            courses:newCourses
        })
    }

    render() {
        return(
            <div className="mainContainer">
                <table>
                    <tr>
                        <th style={{width:"5vw"}}></th>
                        <th onClick={(e)=>this.sortCoursesBy(e,"id")} className='sortButton sortASC' style={{width:"5vw"}}>id</th>
                        <th onClick={(e)=>this.sortCoursesBy(e,"title")} className='sortButton sortASC'>Название</th>
                        <th onClick={(e)=>this.sortCoursesBy(e,"createdAt")} className='sortButton sortASC'>Создан</th>
                        <th style={{width:"10vw"}}></th>
                    </tr>
                    {this.state.courses.map((course)=>
                        <tr key={course.id}>
                            <td>
                                <input type="checkbox"></input>
                            </td>
                            <td>{course.id}</td>
                            <td>{course.title}</td>
                            <td>{course.createdAt}</td>
                            <td>
                                Просмотр
                            </td>
                        </tr>                    
                    )}
                </table>
            </div>
        )
    }
}

export default Courses;