import { useState, useEffect } from 'react'

import ToggleOn from './ToggleOn.jsx'
import ToggleOff from './ToggleOff.jsx'

const ReactUseEffect = () => {

  const [firstName, setFirstName] = useState('Jem')
  const [lastName, setLastName] = useState('Laguda')
  // useEffect hook
  // this will run after the component mounts and every time a state variable changes
  useEffect(() => {
    // alert('Hello, Jem here!')
    console.log('Component mounted or state changed')
  })

  // this will run only once when the component mounts
  useEffect(() => {
    console.log('Component mounted on initiad load')
  }, [])

  // this will run every time a specific state variable changes pass it in the dependency array
  useEffect(() => {
    console.log('Component will run every time the state variable pass to this dependency array changes')
  }, [lastName])

  const [toggle, setToggle] = useState(true)

  return (
    <>
      <h3>React useEffect()</h3>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <button onClick={() => setFirstName('Migs')}>Change First Name here!</button>
      <button onClick={() => setLastName('Evangelista')}>Change Last Name here!</button>

      {/* Conditional Rendering */}
      <p>Toggle: {toggle ? <ToggleOn /> : <ToggleOff />}</p>
      <button onClick={() => setToggle(!toggle)}>Toggle me!</button>
    </>
  )
}

export default ReactUseEffect