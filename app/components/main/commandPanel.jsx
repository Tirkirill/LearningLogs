import React from "react";

const CommandPanel = (props)=> {
    return(<div className='commandPanel'>
        <button className='commandButton' onClick={props.Delete}>Удалить</button>
        <button className='commandButton' onClick={props.Important}>Важные</button>
    </div>)
}

export default CommandPanel;