import React from 'react'
import Task from './Task'
const Tasks = ({users,toggle,clicker}) => {
    return (
        <div>
            {users.map((task)=>(
                <Task key={task.id} task={task} toggle={toggle} clicker={clicker}/>
            ))}
        </div>
    )
}

export default Tasks
