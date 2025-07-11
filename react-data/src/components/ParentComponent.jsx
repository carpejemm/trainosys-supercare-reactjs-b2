import ChildComponent from './/ChildComponent'

const ParentComponent = () => {
  const score = 100
  const name = 'Mary'
  const sampleObject = {
    name: 'Jem',
    age: 25,
    city: 'New York'
  }

  const sampleArray = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape']

  return (
    <>
    <div style={{ border: '5px solid red', padding: '20px', margin: '20px' }}>
      <h3 >Parent Component</h3>
      <ChildComponent scoreNumber={score} nameString={name} sampleObj={sampleObject} sampleArr={sampleArray} />
      </div>
    </>
  )
}

export default ParentComponent