import React from 'react';
const Greetings  = ({ name }) => {
  return (
    <div>
      <h3>Hello, {name || 'World'}!</h3>
    </div>
  );
}
export default Greetings;