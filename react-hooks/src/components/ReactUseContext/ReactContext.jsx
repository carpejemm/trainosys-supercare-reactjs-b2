import { UserProvider } from '../../contexts/UserContext';
import LandingPage from './LandingPage';
import NavBar from './Navbar';
import Footer from './Footer';

const ReactContext = () => {
  return (
    <>
      <h2>React useContext</h2>
      <UserProvider>
        <NavBar />
        <LandingPage />
        <Footer />
      </UserProvider>
    </>
  )
}

export default ReactContext