import { Container, SocialsWrapper, WrapItem } from './Footer.style';
import Logo from '../Logo/Logo';
import NavLink from '../NavLink/NavLink';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import telegram from '../../assets/telegram.svg';
import youtube from '../../assets/youtube.svg';

const Footer = () => {
  return (
    <Container>
      <WrapItem>
        <Logo makeNameVisible={true} logoWidth={4} nameSize={1.3} />
        <SocialsWrapper>
          <img src={facebook} alt="facebook logo" />
          <img src={instagram} alt="instagram logo" />
          <img src={telegram} alt="telegram logo" />
          <img src={youtube} alt="youtube logo" />
        </SocialsWrapper>
      </WrapItem>
      <WrapItem className='links'>
        <NavLink children={'home'} />
        <NavLink children={'store'} />
        <NavLink children={'library'} />
      </WrapItem>
    </Container>
  );
};

export default Footer;
