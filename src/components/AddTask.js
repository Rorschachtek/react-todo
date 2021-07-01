import React from 'react'
import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const[text,setText]=useState('')
    const[day,setDay]=useState('')
    const[rem,setRem]=useState(false)
    const onSubmit=(i)=>{
        i.preventDefault()
        if(!text){
            alert('Please add a task')
            return
        }
        onAdd({text,day,rem})
        setText('')
        setDay('')
        setRem(false)
    }

    return (
       <form className= 'add-form' onSubmit={onSubmit}>
           <div className='form-control'>
               <label>Task</label>
               <input type='text' placeholder='Add Task' value={text}
               onChange={(e)=>setText(e.target.value)}/>
           </div>
           <div className='form-control'>
               <label>Date and Time</label>
               <input type='text' placeholder='Add date and time' value={day}
               onChange={(e)=>setDay(e.target.value)}/>
           </div>
           <div className='form-control form-control-check'>
               <label>Reminder</label>
               <input type='checkbox' checked={rem} value={rem}
               onChange={(e)=>setRem(e.currentTarget.checked)}/>
           </div>
           <input type='submit' value='Save Task' className='btn btn-block'/>
       </form>
    )
}

export default AddTask
