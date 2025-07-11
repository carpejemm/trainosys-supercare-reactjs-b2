import { useState, useCallback, useMemo } from "react"
import ChildComponent from "./ChildComponent"

const ExpensiveCalculation = ({ num }) => {
  console.log("Calculating...");
  let total = 0;
  for (let i = 0; i < 1e7; i++) {
    total += i;
  }
  return <h2>Total: {total + num}</h2>;
}

const ReactUseCallbackUseMemo = () => {
  const [count, setCount] = useState(0);
  const[num, setNum] = useState(0);

  // const handleClick = () => {
  //   console.log('Button clicked');
  // }

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, [])

  const memoizedValue = useMemo(() => {
    console.log("Calculating memoized value...");
    let total = 0;
    for (let i = 0; i < 1e7; i++) {
      total += i;
    }
    return total + num
  },[num])

  
  return (
    <>
      <h3>React useCallback() and useMemo()</h3>
      {/* useCallback */}
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ChildComponent buttonClick={handleClick}/>

      {/* useMemo */}
      <p>Num: {num}</p>
      <input typye="number" value={num} onChange={(e) => setNum(parseInt(e.target.value, 10) || 0)} />
      {/* <ExpensiveCalculation num={count} /> */}
      <h3>Memoized Value: {memoizedValue}</h3>
    </>
  )
}

export default ReactUseCallbackUseMemo