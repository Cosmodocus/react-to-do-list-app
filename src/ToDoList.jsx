import React, {useState} from 'react'

const ToDoList = () => {
    
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleUserInput = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    const deleteTask = (index) => {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);    
    }
    
    const moveTaskUp = (index) => {
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] = 
            [updatedTask[index - 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }
    
    const moveTaskDown = (index) => {
        if(index < tasks.length - 1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] = 
            [updatedTask[index + 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }
    
    
  
    return (
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <input type="text" 
                   placeholder='Enter a task...' 
                   value={newTask} 
                   onChange={handleUserInput}
            />
            <button className="add-btn"
                    onClick={addTask}
            >Add</button>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">
                            {task}
                        </span>
                        <button className="move-btn"
                                onClick={() =>moveTaskUp(index)}
                        > &#9650;
                         </button>   
                        <button className="move-btn"
                                onClick={() =>moveTaskDown(index)}
                        > &#9660;

                        </button>
                        <button className="delete-btn"
                                onClick={() => deleteTask(index)}     
                        >
                            Delete
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList