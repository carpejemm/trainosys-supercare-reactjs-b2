import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <h3>NavBar</h3>
      <nav className='nav-bar'>
        <ul>
          <li className='bg-yellow-300 rounded-2xl'>
            <Link to="/home">Home</Link>
          </li>
          <li className='bg-yellow-300 rounded-2xl'>
            <Link to="/about">About</Link>
          </li>
          <li className='bg-yellow-300 rounded-2xl'>
            <Link to="/contact">Contact</Link>
          </li>
          <li className='bg-yellow-300 rounded-2xl'>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar