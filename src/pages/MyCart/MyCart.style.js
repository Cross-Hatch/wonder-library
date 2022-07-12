import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 3em 1em;

  & > h2 {
    margin: 1.5em 0;
  }
`;

export const Button = styled(Link)`
  width: 6em;
  border-radius: 0.4em;
  background-color: red;
  color: #fff;
  margin-bottom: 1em;
  padding: 0.25em;
  cursor: pointer;
`;