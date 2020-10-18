import React from "react";
import SortableTable from "../../sortableTable.jsx";
import CommandPanel from "../commandPanel.jsx";
import * as API from "../../../backend/API";

import dateFormat from "../../../functions/dateFormat";
import {
    NavLink
} from "react-router-dom";
import Loading from "../../loading/loading.jsx";

class Users extends SortableTable {
    constructor(props) {
        super(props);
    }

    getUsers() {
        API.fetchUsers().then(function(result) {
            return result.json();
        }).then((result)=> {
                for (let user of result) {
                    user.createdAt = new Date(user.createdAt);
                }
                this.setState({
                    values:result
                })
            }
        )
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        if (!this.state.values) {
            return <Loading/>
        }
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
                        <th onClick={(e)=>this.sortValuesBy(e,"name")} className='sortButton sortASC'>Имя</th>
                        <th onClick={(e)=>this.sortValuesBy(e,"createdAt")} className='sortButton sortASC'>Создан</th>
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
                        </tr>                    
                    )}
                </table>
            </div>
        )
    }
}

export default Users;