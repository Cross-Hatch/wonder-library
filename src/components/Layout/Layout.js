import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { Container } from './Layout.style';


const Layout = ({ children }) => {
  return (
    <Container>
      <NavBar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;