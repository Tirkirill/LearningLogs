import React from "react";
import SortableTable from "./sortableTable.jsx";




class Courses extends SortableTable {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="mainContainer">
                <table>
                    <tr>
                        <th style={{width:"2vw"}}></th>
                        <th onClick={(e)=>this.sortValuesBy(e,"id")} className='sortButton sortASC' style={{width:"5vw"}}>id</th>
                        <th onClick={(e)=>this.sortValuesBy(e,"title")} className='sortButton sortASC'>Название</th>
                        <th onClick={(e)=>this.sortValuesBy(e,"createdAt")} className='sortButton sortASC'>Создан</th>
                        <th onClick={(e)=>this.sortValuesBy(e,"studentsNumber")}style={{width:"5vw"}}  className='sortButton sortASC'>Студентов</th>
                        <th style={{width:"10vw"}}></th>
                    </tr>
                    {this.state.values.map((course)=>
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