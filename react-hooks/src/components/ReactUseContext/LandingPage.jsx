import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import UserProfile from "./UserProfile"


const LandingPage = () => {
  // destructure the user from UserContext
  const { laptopBrands } = useContext(UserContext);
  return (
    <>
    <div style={{ backgroundColor: 'lightgreen', padding: '10px', textAlign: 'center' }}>
      <p>Landing Page</p>
      <p>Available Laptop Brands:</p>
      <ul>
        {laptopBrands.map((brand) => (
          <li key={brand.id}>{brand.brand}</li>
        ))}
      </ul>
      <UserProfile />
    </div>
    </> 
  )
}

export default LandingPage