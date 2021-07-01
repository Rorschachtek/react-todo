import Header from "./components/Header";
import Tasks from "./components/Tasks";
import{useState,useEffect, useReducer} from 'react'
import AddTask from "./components/AddTask";
function App() {
  const [showAdd,setShowAdd]=useState(false)

  const[users,dispatch]=useReducer(reducer,[],()=>{
    const localData=localStorage.getItem('users');
    return localData?JSON.parse(localData):[]
  })
  function reducer(users,action){
    switch(action.type){
      case 'add':
        return [...users, action.value];
      case 'delete':
        return (users.filter((task)=>task.id!==action.id))
      case 'toggle':
        return (users.map((task)=>task.id===action.id?{...task, rem: !task.rem  }:task))
      default:
        return users
    }
  }
  useEffect(()=>{
      localStorage.setItem('users',JSON.stringify(users))
  },[users])
  const addTask=(task)=>{
    const id=Math.floor(Math.random()*10000)+1
    const newTask={id,...task}
    dispatch({type: 'add', value: newTask})
    
  }

  const onDelete=(id)=>{
    dispatch({type: 'delete', id:id})
  }

  const toggleReminder=(id)=>{
    dispatch({type:'toggle',id:id})
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
