import Header from "./components/Header";
import Tasks from "./components/Tasks";
import{useState} from 'react'
import AddTask from "./components/AddTask";
function App() {
  const [showAdd,setShowAdd]=useState(false)
  console.log('showAdd')
  const [users,setTasks]=useState([ ])
  const addTask=(task)=>{
    const id=Math.floor(Math.random()*10000)+1
    const newTask={id,...task}
    setTasks([...users,newTask])
  }

  const onDelete=(id)=>{
    setTasks(users.filter((task)=>task.id!==id))
  }

  const toggleReminder=(id)=>{
    setTasks(users.map((task)=>task.id===id?{...task, rem: !task.rem  }:task))
  }
  return (
    <div className='component'>
      <Header showAdd={showAdd} onAdd={()=>setShowAdd(!showAdd)}/>
      {showAdd&&<AddTask onAdd={addTask}/>} 
      {users.length>0?<Tasks users={users} toggle={toggleReminder} clicker={onDelete}/>:<h5>No Task to display</h5>}
    </div>
  );
}

export default App;
