import { memo } from 'react';

// memo - HOC
// Higher Order Component
// It is used to optimize functional components by preventing unnecessary re-renders.
const ChildComponent = memo(({ buttonClick }) => {
  console.log('ChildComponent rendered');
  return (
    <>
      <h3>Child Component</h3>
      <button onClick={buttonClick}>Click me!</button>
    </>
  )
})

export default ChildComponent