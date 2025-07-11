import './App.css'
import ReactUseEffect from './components/ReactUseEffect.jsx'
import ReactContext from './components/ReactUseContext/ReactContext.jsx'
import ReactUseReducer from './components/ReactUseReducer.jsx'
import ReactUseCallbackUseMemo from './components/ReactUseCallbackUseMemo/ReactUseCallbackUseMemo.jsx'
import CustomHooks from './components/custom-hooks/CustomHooks.jsx'


const App = () => {

  return (
    <>
      <h3>React Hooks</h3>
      <hr />
      <ReactUseEffect />
      <hr />
      <ReactContext />
      <hr />
      <ReactUseReducer />
      <hr />
      <ReactUseCallbackUseMemo />
      <hr />
      <CustomHooks />
      <hr />
    </>
  )
}

export default App
