import React from "react";
import SortableTable from "../../sortableTable.jsx";
import dateFormat from "../../../functions/dateFormat";
import {
    NavLink
} from "react-router-dom";

class Users extends SortableTable {
    constructor(props) {
        super(props);
    }



    render() {
        return(
            <div className="mainContainer">
                <div className='commandPanel'>
                    <button className='commandButton' onClick={()=>this.deleteValueByIDs(this.state.selectedValuesIds)}>Удалить</button>
                    <button className='commandButton' onClick={()=>this.makeImportantByIDs(this.state.selectedValuesIds)}>Важные</button>
                </div>
                <table>
                    <tr>
                        <th style={{width:"2vw"}}></th>
                        <th onClick={(e)=>this.sortValuesBy(e,"id")} className='sortButton sortASC' style={{width:"5vw"}}>id</th>
                        <th onClick={(e)=>this.sortValuesBy(e,"name")} className='sortButton sortASC'>Имя</th>
                        <th onClick={(e)=>this.sortValuesBy(e,"createdAt")} className='sortButton sortASC'>Создан</th>
                        <th style={{width:"10vw"}}></th>
                    </tr>
                    {this.state.values.map((user)=>
                        <tr key={user.id} id={"row"+user.id}>
                            <td>
                                <input type="checkbox" onChange={this.onChangeHandler} id={"choose"+user.id}></input>
                            </td>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>
                                {dateFormat(user.createdAt)}
                            </td>
                            <td>
                                <NavLink to={"user/"+user.id}>Просмотр</NavLink>
                            </td>
                        </tr>                    
                    )}
                </table>
            </div>
        )
    }
}

export default Users;