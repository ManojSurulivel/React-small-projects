import React,{useState} from 'react'
import "./3.ToDoList.css";


const ToDoList = () => {
   
  const[tasks,setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk on road"]);
  const[newTask,setNewTask] = useState("");

   const handleInputChange = (e) => {
       setNewTask(e.target.value);
   }

   const addTask = () => {
    if(newTask.trim() !== ""){
      setTasks(tasks => [...tasks, newTask]);
      setNewTask("");
    }
   }

   const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_,i)=> i !== index);
      setTasks(updatedTasks)
   }

   const moveTaskUp = (index) => {
      if(index > 0){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = 
        [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
      }
   }
   
   const moveTaskDown = (index) => {
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
   }
  return (
    <div className='to-do-list'>
      <h1>To-Do-List</h1>

      <div>
        <input type="text" 
               className='textInput' 
               value={newTask} 
               onChange={handleInputChange}
               placeholder='Enter a Task...' />

         <button className="add-button" 
                 onClick={addTask}  >  Add   </button>
      </div>
      <div>
      <ul>
        {tasks.map((task,index) => 
          <li key={index} >

            <span className='text'> {task} </span>
            <button className='delete-button' onClick={()=> deleteTask(index)}>Delete🗑</button>
            <button className='move-button' onClick={()=> moveTaskUp(index)}>👆</button>
            <button className='move-button' onClick={()=> moveTaskDown(index)}>👇</button>

          </li>
        )}
      </ul>
      </div>

    </div>
  )
}

export default ToDoList
