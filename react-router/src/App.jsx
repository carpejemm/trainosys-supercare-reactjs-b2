import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import Dashboard from './pages/Dashboard'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar />,
    },
    {
      path: '/home',
      element: <HomePage />
    },
    {
      path: '/contact',
      element: <ContactPage />
    },
    {
      path: '/about',
      element: <AboutPage />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    }
  ])

  return (
    <>
      <h3>React Router</h3>
      <RouterProvider router={router} />
    </>
  )
}

export default App
