import React, {use, useState} from 'react'
function Todo(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setnewTasks] = useState("");

    function handleInputChange(e){
        setnewTasks(e.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...tasks, newTask]);
            setnewTasks("");
        }
        
    }
    function deleteTask(index){
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }
    return(
        <div className='todoList'>
            <h2>Todo App</h2>
            <div>
                <input type="text" 
                        placeholder='Enter a task...'
                        value={newTask}
                        onChange={handleInputChange}/>
                <button className='addButton' onClick={addTask}>Add Task</button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='deleteButton' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='moveButton' onClick={() => moveTaskUp(index)}>⤴</button>
                        <button className='moveButton' onClick={() => moveTaskDown(index)}>⤵</button>
                    </li>)}
            </ol>
        </div>
    );
}
export default Todo