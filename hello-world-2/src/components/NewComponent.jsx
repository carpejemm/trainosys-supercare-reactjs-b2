// Functional based component
const NewComponent = props => {

  const a = 10
  const b = 20

  const isAdmin = true

  // arrow function
  // fat arrow function
  const sampleFunction = () => {
    return a + b
  }

  console.log(sampleFunction());


  return (
    <>
    <div style={{ border: '5px solid red', marginTop: '50px' }}>
      <h1>New Component</h1>
      <p>Name: {props.name}</p>
      <p>Sum of two numbers {a} and {b}: {a + b}</p>
      <p>Difference of two numbers {a} and {b}: {a - b}</p>
      <p>{10 + 10 +12}</p>
      <p>{10 - 10 +12}</p>
      <p>{sampleFunction()}</p>
      {/* Ternary Operator */}
      {/* Can't use if else in JSX, use ternary operator instead */}
      <p>
        {
          isAdmin ? 'You are an admin' : 'You are not an admin'
        }
        <br />
        {
          isAdmin && 'Logged in successfully'
        }
      </p>
      <p>This is a paragraph</p>
    </div>
    </>
  )
}

export default NewComponent;