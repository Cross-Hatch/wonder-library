import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.red};
  width: max-content;
  padding: 0.9ch 1.5ch;
  border-radius: 1ch;
  font-weight: 800;
  text-transform: capitalize;
`;

