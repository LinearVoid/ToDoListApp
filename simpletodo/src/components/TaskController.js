import TaskAdd from "./taskadd"
import TaskList from "./taskslist";
import React from "react";
export default function TaskController(){
    const [TaskArray, setTaskArray] =  React.useState(["Item 1", "Item2"]);

    function addTask (newTask){

        setTaskArray(prevState => [...prevState, newTask])

    }


    return(
        <div className = "allList">
            <p>test</p>
            <TaskList list = {TaskArray}/>
            <TaskAdd/>
        </div>
    )
}