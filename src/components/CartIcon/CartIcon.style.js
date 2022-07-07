import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: max-content;
`;
export const CartImg = styled.img`
  width: ${(props) => props.cartImgWidth}em;
  aspect-ratio: 1;
`;

export const Badge = styled.div`
  position: absolute;
  inset: 0% -14% auto auto;

  display: grid;
  place-content: center;
  width: 2.5ch;
  padding: 0 0.9em;
  background-color: ${(props) => props.theme.red};
  border-radius: 100%;

  font-size: 0.6em;
  font-weight: 700;
  line-height: 100%;

  aspect-ratio: 1;
`;
