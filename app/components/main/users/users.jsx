import React from "react";
import SortableTable from "../../sortableTable.jsx";
import dateFormat from "../../../functions/dateFormat";


class Users extends SortableTable {
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
                        <th onClick={(e)=>this.sortValuesBy(e,"name")} className='sortButton sortASC'>Имя</th>
                        <th onClick={(e)=>this.sortValuesBy(e,"createdAt")} className='sortButton sortASC'>Создан</th>
                        <th style={{width:"10vw"}}></th>
                    </tr>
                    {this.state.values.map((user)=>
                        <tr key={user.id}>
                            <td>
                                <input type="checkbox"></input>
                            </td>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>
                                {dateFormat(user.createdAt)}
                            </td>
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

export default Users;