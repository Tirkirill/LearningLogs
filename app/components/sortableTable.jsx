import React from "React";

class SortableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: props.values
        }
    } 

    sortValuesBy(e, key) {
        let newValues;
        if (e.target.classList.contains("sortASC") 
            && e.target.classList.contains("chosen"))
        {
            newValues = this.state.values.sort((a,b)=>a[key]>b[key]?-1:1);
            e.target.classList.replace("sortASC", "sortDESC");
        }
        else if (e.target.classList.contains("sortDESC") 
                && e.target.classList.contains("chosen")) 
        {
            newValues = this.state.values.sort((a,b)=>a[key]>b[key]?1:-1);
            e.target.classList.replace("sortDESC", "sortASC");
        }
        else {
            let tableTitles = document.querySelectorAll("th");
            for (let th of tableTitles) {
                th.classList.remove("chosen");
                th.classList.replace("sortDESC", "sortASC");
            }
            newValues = this.state.values.sort((a,b)=>a[key]>b[key]?1:-1);
            e.target.classList.add("chosen");
        }
        this.setState({
            values:newValues
        })
    }
}

export default SortableTable;