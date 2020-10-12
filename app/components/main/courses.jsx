import React from "react";

const cours = [
    {
        id:"2",
        title:"Second course",
        createdAt:new Date(2002, 2,2),
        studentsNumber:2
    },
    {
        id:"1",
        title:"First course",
        createdAt:new Date(2002, 2,2),
        studentsNumber:5
    },
    {
        id:"3",
        title:"NEW course!",
        createdAt:new Date(2002, 2,2),
        studentsNumber:2
    },
    {
        id:"4",
        title:"NEwNEW! course",
        createdAt:new Date(2002, 2,2),
        studentsNumber:12
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
                        <th style={{width:"2vw"}}></th>
                        <th onClick={(e)=>this.sortCoursesBy(e,"id")} className='sortButton sortASC' style={{width:"5vw"}}>id</th>
                        <th onClick={(e)=>this.sortCoursesBy(e,"title")} className='sortButton sortASC'>Название</th>
                        <th onClick={(e)=>this.sortCoursesBy(e,"createdAt")} className='sortButton sortASC'>Создан</th>
                        <th onClick={(e)=>this.sortCoursesBy(e,"studentsNumber")}style={{width:"5vw"}}  className='sortButton sortASC'>Студентов</th>
                        <th style={{width:"10vw"}}></th>
                    </tr>
                    {this.state.courses.map((course)=>
                        <tr key={course.id}>
                            <td>
                                <input type="checkbox"></input>
                            </td>
                            <td>{course.id}</td>
                            <td>{course.title}</td>
                            <td>
                                {(course.createdAt.getDate() < 10? "0"+course.createdAt.getDate():course.createdAt.getDate()) +"." + 
                                (course.createdAt.getMonth()+1 < 10? "0"+(course.createdAt.getMonth()+1):(course.createdAt.getMonth()+1)) + "." 
                                + course.createdAt.getFullYear()}
                            </td>
                            <td>{course.studentsNumber}</td>
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