import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const EditProfile = () => {

  // destructure the user from UserContext
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div style={{ backgroundColor: 'pink', padding: '10px', textAlign: 'center', color: 'black' }}>
        <p>Edit Profile</p>
        <form>
          <label>
            Full Name:
            <input type="text" name="fullName" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <button type="submit">Save Changes</button>
        </form>

        <p>Current User: {user.fullName}</p>
        <p>Current Email: {user.email}</p>

        <button onClick={() => setUser({ fullName: 'Jane Doe', email: 'test@gmail.com'})}>Click</button>
      </div>
    </>
  )
}

export default EditProfile