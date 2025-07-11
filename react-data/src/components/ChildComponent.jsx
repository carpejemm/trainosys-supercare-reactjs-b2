const ChildComponent = props => {

  // destructuring props
  const { scoreNumber, nameString, sampleObj, sampleArr } = props;

  // console.log(sampleArr)
  
  
  return (
    <>
    <div style={{ border: '5px solid blue', padding: '20px', margin: '20px' }}>
      <h3>Child Component</h3>
      <p>{scoreNumber}</p>
      <p>{nameString}</p>
      <p>{sampleObj.city}</p>
      <h5>Fruits of the Day</h5>
      <ol>
        {sampleArr.map(fruit => (
          <li>{fruit}</li>
        ))}
      </ol>
    </div>
    </>
  )
}

export default ChildComponent