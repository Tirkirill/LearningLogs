import React from "React";

class SortableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValuesIds:[]
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    } 

    deleteValueByIDs(ids) {
        let newValues = this.state.values.filter((elem)=> !ids.includes(elem.id));
        this.setState({
            selectedValuesIds:[],
            values: newValues
        });
    }

    selectValue(id) {
        let newSelectedValues = this.state.selectedValuesIds.concat(id);
        this.setState({
            selectedValuesIds: newSelectedValues
        });
    }

    deselectValue(id) {
        let newSelectedValues = this.state.selectedValuesIds.filter((elem)=> elem!=id);
        this.setState({
            selectedValuesIds: newSelectedValues
        });
        
    }

    makeImportantByIDs(ids) {
        for (let id of ids) {
            let row = document.querySelector("#row"+id);
            row.classList.toggle("important");
        }
    }

    onChangeHandler(e) {
        let checkBox = e.target;
        let id = checkBox.id.replace("choose", "");
        if (checkBox.checked) {
            this.selectValue(id);
        }
        else {
            this.deselectValue(id);
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