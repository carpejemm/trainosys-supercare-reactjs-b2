import { useState } from 'react'
import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { addTask } from './tasksSlice.js'

const App = () => {
  const [text, setText] = useState('')
  const tasks = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  const handleAddTask = () => {
    if (!text.trim()) return 
    dispatch(addTask(text))
    setText('') 
  }
  
  return (
    <>
      <h2>React Redux Toolkit</h2>
      <h1>Tasks List</h1>
      {/* Display the list of todos */}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
          </li>
        ))}
      </ul>
      {/* Create input field to add todos */}
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </>
  )
}

export default App
