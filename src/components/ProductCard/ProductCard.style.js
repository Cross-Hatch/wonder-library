import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-content: center;
  background-image: url(\"${(props) => props.image}\");
  background-repeat: no-repeat;
  background-size: 105% 100%;
  background-position: center;

  position: relative;
  border: 3px solid ${(props) => props.theme.dark300};
  border-radius: 1.3ch;
  height: 18em;
  aspect-ratio: 1 / 1.41;
  transition: transform 500ms ease-in-out;
  /* filter: ${(props) => props.theme.shadow}; */
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ProductOverlay = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  inset: 0 auto auto 0;
  height: 100%;
  width: 100%;
  padding: 2em 1em;
  border-radius: 1ch;
  background-image: linear-gradient(0deg, #111111ef 25%, transparent 130%);
  backdrop-filter: blur(1px);
  z-index: 1;
  transition: opacity 500ms ease-in-out;
  overflow: hidden;
  opacity: 0;

  &:hover {
    opacity: 1;

    div {
      transform: translateY(0);
    }
  }

  &:hover ${Container} {
    transform: translateY(-10px);
  }
`;

export const ProductImg = styled.img`
  object-fit: cover;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(280px);
  transition: transform 700ms ease-in-out;

  h3 {
    line-height: 1em;
  }

  hr {
    width: 70%;
    height: 3px;
    border: none;
    border-radius: 1.5px;
    background-color: ${(props) => props.theme.light};
    margin-inline-start: 0;
  }

  p {
    font-size: 0.9em;
    font-weight: 300;
    line-height: 1em;
    margin: 0.5em 0 0 0;
  }
`;
