import { Container, LogoImg, LogoNameContainer } from './Logo.style';
import logo from "../../assets/logo-light.svg";

const Logo = ({ makeNameVisible, logoWidth, nameSize }) => {
  return (
    <Container>
      <LogoImg logoWidth={logoWidth} src={logo} alt="Wolib logo" />
      {makeNameVisible ? (
        <LogoNameContainer nameSize={nameSize} >
              Wonder Library <br />
              <span>Ministries</span>
        </LogoNameContainer>
      ) : null}
    </Container>
  );
};

export default Logo;
