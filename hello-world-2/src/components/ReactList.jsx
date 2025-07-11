const ReactList = () => {
  const fastFoods = ['KFC', 'Jollibee', 'McDonalds', 'Burger King', 'Taco Bell'];

  const robinsonsBranches = [
    {
      id: 1,
      name: 'Robinsons Galleria',
      location: 'Ortigas, Pasig City'
    },
    {
      id: 2,
      name: 'Robinsons Magnolia',
      location: 'New Manila, Quezon City'
    },
    {
      id: 3,
      name: 'Robinsons Place Manila',
      location: 'Ermita, Manila'
    }
  ]
  return (
    <>
      <h3>React List Component</h3>
      <div>List of fast food restaurants in the area</div>
      {/* food - loop variable */}
      <ul>
        {
          fastFoods.map((food) => (
            <li>{food}</li>
          ))
        }
      </ul>
      <div>List of Robinsons branches</div>
      <ol>
        {
          robinsonsBranches.map(branch => (
            <li key={branch.id}>
              <p>Branch Name: {branch.name}</p>
              <p>Location: {branch.location}</p>
            </li>
          ))
        }
      </ol>
      
    </>
  )
}

export default ReactList;