import React from "react";
import SortableTable from "../../sortableTable.jsx";
import dateFormat from "../../../functions/dateFormat";
import CommandPanel from "../commandPanel.jsx";
import * as API from "../../../backend/API";

import {
    NavLink
} from "react-router-dom";

class Courses extends SortableTable {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="mainContainer">
                <CommandPanel 
                    Delete={()=>this.deleteValueByIDs(this.state.selectedValuesIds)}
                    Important={()=>this.makeImportantByIDs(this.state.selectedValuesIds)}
                />
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
                        <tr key={course.id} id={"row"+course.id}>
                            <td>
                                <input type="checkbox"  onChange={this.onChangeHandler} id={"choose"+course.id}></input>
                            </td>
                            <td>{course.id}</td>
                            <td>{course.title}</td>
                            <td>
                                {dateFormat(course.createdAt)}
                            </td>
                            <td>{course.studentsNumber}</td>
                            <td>
                                <NavLink to={"course/"+course.id}>Просмотр</NavLink>
                            </td>
                        </tr>                    
                    )}
                </table>
            </div>
        )
    }
}

export default Courses;