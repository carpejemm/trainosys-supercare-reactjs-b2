import React, { useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h3>Counter Component</h3>
      <p data-testid='counter-value'>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default Counter;