import React from "react";
import { withRouter } from 'react-router-dom'

class CoursePage extends React.Component {
    constructor(props) {
        super(props);
        const {match} = this.props
        const id = match.params.id;
        this.state = {
            id:id
        }
    }

    render() {
        return(
            <div className='mainContainer'>Страница курса c id - {this.state.id}!</div>
        )
    }
}

export default withRouter(CoursePage);