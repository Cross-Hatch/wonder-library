import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.dark100};
  border: 2px solid ${(props) => props.theme.dark300};
  border-radius: 15px;
  padding: 2em 3em;
  margin: 1em 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 6em;
    aspect-ratio: 1 / 1.41;
    border-radius: 0.4em;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-grow: 1;
  margin: 0 0 0 2em;
  min-height: 6em;

  h4 {
    font-size: 1.2em;
    font-weight: 700;
    margin-bottom: 0.3em;
  }

  p {
    font-size: 0.8em;
    flex-grow: 1;
    width: 40ch;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  a {
    align-self: flex-end;
    font-size: 0.8em;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.red};
  width: max-content;
  padding: 0.9ch 1.5ch;
  border-radius: 1ch;
  font-weight: 800;
  text-transform: capitalize;
`;
