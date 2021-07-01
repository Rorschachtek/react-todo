import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const Task = ({task,toggle,clicker}) => {
    return (
        <div className={`task ${task.rem?'reminder':''}`} onDoubleClick={()=>toggle(task.id)}>
            <h3>{task.text}<FaTrashAlt onClick={()=>clicker(task.id)} style={{cursor: 'pointer'}}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
