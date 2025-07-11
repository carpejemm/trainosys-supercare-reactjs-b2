import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const Footer = () => {

  // destructure the user from UserContext
  const { user } = useContext(UserContext);
  
  return (
    <>
    <div style={{ backgroundColor: 'lightgray', padding: '10px', textAlign: 'center' }}>
      <p>FOOTER</p>
      <p>All rights reserved to {user.fullName} 2025</p>
    </div>
    </>
  )
}

export default Footer