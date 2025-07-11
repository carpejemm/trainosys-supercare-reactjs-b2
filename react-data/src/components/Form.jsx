import { useState } from "react";

const Form = () => {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

  // const [testValue, setTestValue] = useState(null); // Example state variable for testing

  const [isSubmitted, setIsSubmitted] = useState(false);
  const isError = true; // Example error state, can be used for validation

  // const handleFirstNameChange = (event) => {
  //   console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  const handleChange = (e) =>  {
    const { name, value } = e.target;
    console.log(e, "event");

    // console.log(name, "name");
    // console.log(value, "value");

    // Dynamically update the state based on the input field name

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSumbitForm = event => {
    event.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitted(true);
  }

  return (
    <>
      <h3>Form Component</h3>
      <form onSubmit={handleSumbitForm}>
        <label>First Name:</label>
        <input 
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange} 

        />
        <br />
        <label>Last Name:</label>
        <input 
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange} 
        />
        <br />
        <button>Submit</button>
      </form>

      {/* Condtional Rendering */}
      {isSubmitted && (
        <p>
          Hello, {formData.firstName} {formData.lastName}!
        </p>
      )}

      isSubmitted: {isSubmitted ? 'Yes' : 'No'}
      {
        isSubmitted ? (
          <div>Thank you for submmiting!</div>
        ) : (
          <div>Please fill out the form.</div>
        )
      }

      {/* Error Handling */}
      {isError && (
        <div style={{ color: 'red' }}>
          There was an error submitting the form.
        </div>
      )}

      {/* OR ||  */}
      {isError || (
        <div style={{ color: 'green' }}>
          Form submitted successfully!
        </div>
      )}

      {
        !formData.firstName && (
          <div>
            First Name: {formData.firstName}
          </div>
        )
      }
    </> 
  )
}

export default Form;