import { useState, useEffect } from 'react'
import axios from 'axios'
import AddTask from './AddTask'

const Tasks = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {

    const fetchTasks = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/v1/tasks/all')
        console.log(res)
        setTasks(res.data.data)
      } catch (error) {
        console.error("Error fetching tasks:", error)
      }
    }

    fetchTasks()
  }, [])

  console.log(tasks)

  const handleTaskUpdate = async (taskId) => {
    console.log("Updating task with ID:", taskId)
    const params = {
      title: 'Updated Task Title',
    }

    const res = await axios.patch(`http://localhost:8000/api/v1/tasks/${taskId}`, params)
    console.log(res)

  }

  return (
    <>
      <h2>Tasks for Today</h2>
      <ul>
        {
          tasks.map(task => (
            <li key={task._id}>
              <p>Name: {task.title}</p>
              {/* <p>Description: {task.description}</p> */}
              <button onClick={handleTaskUpdate(task._id)}>Edit Task</button>
            </li>
          ))
        }
      </ul>
      <hr />
      <AddTask />
    </>
  )
}

export default Tasks