import { Component } from 'react';

// This is a class component
// class in javascript is a blueprint for creating objects 
// Component from React is a base class for creating React components
class ClassComponent extends Component {
  // props - short for properties, used to pass data from parent to child components
  constructor(props) {
    super(props);
    // local state
    this.state = {
      name: 'Jem Laguda',
      age: 25,
    }
  }

  // write functions

  // render method - used to render the component
  // setState 
  // setState = (newState) => {
  //   this.setState(newState);
  // };

  render() {
    return (
      <div style={{ border: '5px solid green', marginTop: '50px' }}>
        <h1>Class Component</h1>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <p>Props Name: {this.props.name}</p>
      </div>
    );
  }
}

export default ClassComponent;