import { Container, NavList } from './NavBar.style';
import NavLink from '../NavLink/NavLink';
import Logo from '../Logo/Logo';
import CartIcon from '../CartIcon/CartIcon';

const NavBar = () => {
  return (
    <Container>
      <div className='logo-list'>
        <Logo makeNameVisible={false} logoWidth={2} />
        <NavList>
          <NavLink children={'home'} />
          <NavLink children={'store'} />
          <NavLink children={'library'} />
        </NavList>
      </div>
      <CartIcon cartImgWidth={2} />
    </Container>
  );
};

export default NavBar;
