const Button = ({ buttonClick, countVariable }) => {
  return (
    <>
      <h3>Button Component</h3>
      <p>{countVariable}</p>
      <button onClick={buttonClick}>Submit</button>
    </>
  )
}

export default Button;