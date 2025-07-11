import './App.css'

import Greetings from './components/Greetings.jsx'
import Counter from './components/Counter.jsx'

function App() {

  return (
    <>
      <h2>React Unit Testing with Vitest</h2>
      <p>Welcome to the React Unit Testing with Vitest tutorial.</p>
      <Greetings name={'Jem'} />
      <Counter />
    </>
  )
}

export default App
