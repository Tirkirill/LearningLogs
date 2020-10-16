import React from "react";
import { withRouter } from 'react-router-dom'
import SortableTable from "../../sortableTable.jsx";
import CommandPanel from "../commandPanel.jsx";

class CoursePage extends SortableTable {
    constructor(props) {
        super(props);
        const {match} = this.props
        const id = match.params.id;
        this.state = {
            id:id,
        }
    }

    render() {
        return(
            <div className='mainContainer'>
                <CommandPanel 
                    Delete={()=>this.deleteValueByIDs(this.state.selectedValuesIds)}
                    Important={()=>this.makeImportantByIDs(this.state.selectedValuesIds)}
                />
            </div>
        )
    }
}

export default withRouter(CoursePage);