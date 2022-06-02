import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
`;

export const LogoImg = styled.img`
  width: ${(props) => props.logoWidth}em;
  aspect-ratio: 1;
`;

export const LogoNameContainer = styled.div`
  font-size: ${(props) => props.nameSize}rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.2ch;
  margin-inline: 0.7em;

  span {
    letter-spacing: 0.7ch;
  }
`;
