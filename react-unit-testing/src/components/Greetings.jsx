import React from 'react';

const Greetings = ({ name }) => {
  return (
    <>
      <h3>Hello, { name || 'World'}</h3>
    </>
  )
}

export default Greetings;