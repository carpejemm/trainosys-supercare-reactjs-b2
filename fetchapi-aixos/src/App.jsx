import { useState, useEffect } from 'react'
import './App.css'

import Tasks from './components/Tasks'

const App = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() =>{
    fetchUsers()
  }, [])

  console.log(users)

  return (
    <>
      {/* <h2>List of Users</h2>
      <ul>
        {
          users.map(user => (
            <li key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Company Name: {user.company.name}</p>
              <p>Address Geolocation: </p>
              <p>Latitude: {user.address.geo.lat}</p>
              <p>Longitude: {user.address.geo.lng}</p>
              <p></p>
            </li>
          ))
        }
      </ul> */}
      <hr />
      <Tasks />
    </>
  )
}

export default App
