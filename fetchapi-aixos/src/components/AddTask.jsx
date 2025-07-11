import { useState } from 'react'
import axios from 'axios'

const AddTask = () => {
  const [task, setTask] = useState('')

  const handleInputChange = event => {
    setTask(event.target.value)
  }

  const handleAddNewTask = async () => {

    const params = {
      title: task,
      description: 'This is a new task'
    }

    const res = await axios.post('http://localhost:8000/api/v1/tasks/create', params)
    console.log(res)
    setTask('') // Clear the input field after adding the task
  }

  // sample patch call
  // const handleUpdateTask = async (taskId) => {
  //   const params = {
  //     title: 'Updated Task Title',
  //   }
  //   const res = await axios.patch(`http://localhost:8000/api/v1/tasks/update/${taskId}`, params)
  // }

  return (
    <>
      <h3>Add Task</h3>
      <input 
        type="text"
        placeholder='Add task here'
        value={task}
        onChange={handleInputChange}
      />
      <button onClick={handleAddNewTask}>Add New Task</button>
    </>
  )
}

export default AddTask