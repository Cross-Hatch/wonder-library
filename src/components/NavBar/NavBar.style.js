import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 4.75em;
  padding: 0.5em 5em;
  background-color: ${(props) => props.theme.dark100};
  border: 2px solid ${(props) => props.theme.dark300};
  border-radius: 15px;
  /* backdrop-filter: blur(30px); */

  .logo-list {
    display: flex;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 700;
  text-transform: capitalize;
  padding-inline-start: 0;
  margin-inline-start: 1.3em;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
