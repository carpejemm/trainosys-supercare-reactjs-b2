import { createContext, useState } from 'react';

// creating new instance of context
export const UserContext = createContext()

// create a provider component
// this will be used to wrap the components that need access to the context/data
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    fullName: 'John Doe',
    email: 'john@gmail.com'
  })

  const laptopBrands = [
    {
      id: 1,
      brand: 'Apple',
      model: 'MacBook Pro',
      price: 1500
    },
    {
      id: 2,
      brand: 'Dell',
      model: 'XPS 13',
      price: 1200
    },
    {
      id: 3,
      brand: 'HP',
      model: 'Spectre x360',
      price: 1300
    },
    {
      id: 4,
      brand: 'Lenovo',
      model: 'ThinkPad X1 Carbon',
      price: 1400
    }
  ]

  const initialValue = {
    user,
    setUser,
    laptopBrands
  }

  return (
    <UserContext.Provider value={initialValue}>
      {/* Children components will go here */}
      { children }
    </UserContext.Provider>
  )
}