import { useReducer, useState } from 'react'

const initialTodos = [
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Learn useReducer', completed: false },
  { id: 3, title: 'Eat', completed: false },
]

const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // logic to add a new todo
      {
        const newTodo = {
          id: state.length + 1,
          title: action.payload,
          completed: false,
        }
        return [...state, newTodo]
      }
    case 'REMOVE_TODO':
      // logic to remove a todo by id
      return state.filter(todo => todo.id !== action.payload)
    default:
      return state
  }
}

const ReactUseReducer = () => {
  // useReducer is a hook that is used to manage complex state logic in React components.
  // todos => current state
  // dispatch => function to dispatch actions to update the state
  // reducerFunction => function that takes the current state and an action, and returns a new state
  // initialTodos => initial state of the todos
  const [todos, dispatch] = useReducer(reducerFunction, initialTodos)
  const [newTask, setNewTask] = useState('')

  const handleChangeInput = (e) => {
    const newTask = e.target.value
    setNewTask(newTask)
  }

  const handleAddTask = () => {
    if(newTask.trim() === '') {
      alert('Please enter a task')
      return
    }

    // Dispatch an action to add a new todo
    dispatch({ type: 'ADD_TODO', payload: newTask })

    setNewTask('') // Clear the input field after adding the task

    console.log('1' === 1)
    console.log('1' == 1)
  }

  return (
    <>
      <h3>React useReducer()</h3>
      <h3>List of Todos for today</h3>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              <span style={{ marginRight: '15px'}}>{todo.title}</span>
              <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id})}>Delete</button>
            </li>
          ))
        }
      </ul>
      {/* Add Todo Form */}
      <input type='text' value={newTask} placeholder='Add Todo here' onChange={handleChangeInput} />
      <button onClick={handleAddTask}>Add Task</button>
    </>
  )
}

export default ReactUseReducer