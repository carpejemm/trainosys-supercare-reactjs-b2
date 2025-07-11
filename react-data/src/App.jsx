import { useState } from 'react'
import './App.css'

import ParentComponent from './components/ParentComponent'
import Form from './components/Form'

const App = () => {
  // React State
  // points - state variable
  // const points = 0
  // setPoints - function to update the state variable
  // setPoints - updater function
  // const setPoints = () => {
  //   points = 1
  // }
  // convention of updater function is to use set + state variable name camelCase
  const [points, setPoints] = useState(0)
  const [teamName, setTeamName] = useState('Golden State Warriors')
  // const [age, setAge] = useState(0)

  const handleClickAddPoints = () => {
    // Add validation if maximum points display alert prompt
    if(points >= 10) {
      alert('Maximum points reached!')
      return
    }
    setPoints(points + 1)
  }

  return (
    <>
      <div style={{ border: '5px solid red', padding: '20px', margin: '20px' }}>
      <h3>This is the App.jsx</h3>
        <ParentComponent />
        <h3>Score Board</h3>
        <p>Current points: {points}</p>
        <button onClick={handleClickAddPoints}>Add Points</button>
        <p>Team Name: {teamName}</p>
        <button onClick={() => setTeamName('Spurs')}>Change Team Name</button>
        <Form />
      </div>
    </>
  )
}

export default App

// Parent Component - App.jsx
// Child Component of App.jsx - ParentComponent.jsx
// Child Component of ParentComponent.jsx - ChildComponent.jsx
