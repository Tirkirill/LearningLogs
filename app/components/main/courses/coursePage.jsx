import React from "react";
import { withRouter } from 'react-router-dom'
import Loading from "../../loading/loading.jsx";
import SortableTable from "../../sortableTable.jsx";
import CommandPanel from "../commandPanel.jsx";
import * as API from "../../../backend/API.js";
import dateFormat from "../../../functions/dateFormat.js";
import {
    NavLink
} from "react-router-dom";

class CoursePage extends SortableTable {
    constructor(props) {
        super(props);
        const {match} = this.props
        const id = match.params.id;
        this.state = {
            ...this.state,
            id:id,
        }
    }
    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        API.fetchPosts(this.state.id).then(function(result) {
            return result.json();
        }).then((result)=> {
                for (let post of result) {
                    post.createdAt = new Date(post.createdAt);
                }
                this.setState({
                    values:result
                })
            }
        ) 
    }

    deleteValueByIDs(ids) {
        API.fetchDeleteValues("posts", this.state.selectedValuesIds);
        super.deleteValueByIDs(ids);
    }

    render() {
        if (!this.state.values) {
            return <Loading/>
        }
        return(
            <div className='mainContainer'>
                <CommandPanel 
                    Delete={()=>this.deleteValueByIDs(this.state.selectedValuesIds)}
                    Important={()=>this.makeImportantByIDs(this.state.selectedValuesIds)}
                />
                <table>
                    <tr>
                        <th style={{width:"2vw"}}></th>
                        <th onClick={(e)=>this.sortValuesBy(e,"id")} className='sortButton sortASC' style={{width:"5vw"}}>id</th>
                        <th onClick={(e)=>this.sortValuesBy(e,"text")} className='sortButton sortASC'>Текст</th>
                        <th onClick={(e)=>this.sortValuesBy(e,"createdAt")} className='sortButton sortASC'>Создан</th>
                    </tr>
                    {this.state.values.map((post)=>
                        <tr key={post.id} id={"row"+post.id}>
                            <td>
                                <input type="checkbox"  onChange={this.onChangeHandler} id={"choose"+post.id}></input>
                            </td>
                            <td>{post.id}</td>
                            <td>{post.text}</td>
                            <td>
                                {dateFormat(post.createdAt)}
                            </td>
                        </tr>                    
                    )}
                </table>
            </div>
        )
    }
}

export default withRouter(CoursePage);