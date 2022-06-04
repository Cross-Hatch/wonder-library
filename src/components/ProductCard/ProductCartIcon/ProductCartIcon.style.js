import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  inset: auto -16px -18px auto;
  width: max-content;
  height: 3em;
  padding: 0.5em 0.5em;
  background-color: ${(props) => props.theme.light};
  border: 2px solid ${(props) => props.theme.dark300};
  border-radius: 1ch 1ch 2.5ch 1ch;
  box-shadow: -3px 5px 9px -2px #292522;
  transition: transform 300ms ease-in-out;
  z-index: 10;

  svg {
    width: 1.8em;
  }

  &:hover {
    transform: translateY(-5px);
  }

  &:active {
    transform: scale(.95);
  }
`;
