// useState - Reack Hook
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NewComponent from './components/NewComponent'
import Form from './components/Form'
import Button from './components/Button'
import ClassComponent from './components/ClassComponent'
import ReactList from './components/ReactList'

// function App() {
const App = () => {
  // useState implementation
  const [count, setCount] = useState(0)

  console.log('App component rendered')

  const handleClickButton = () => {
    setCount(count + 1)
    console.log('Button clicked, count:', count + 1)
  }

  return (
    <>
      <div style={{ border: '5px solid blue', padding: '20px' }}>
        <div className='app-div'>This div is in the App.jsx component</div>
        <NewComponent name='Jem' />
        <NewComponent name='Migs' />
        <NewComponent name='Jeff' />
        <Form />
        <Button buttonClick={handleClickButton} countVariable={count}/>
        <hr />
        <h3>Class Component</h3>
        <ClassComponent name='Anna' />
        <hr />
        <ReactList />
      </div>
    </>
  )
}

export default App
