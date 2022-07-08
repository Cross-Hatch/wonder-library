import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  inset: 50% 0 0 50%;
  transform: translate(-50%, -50%);
  max-width: 50vw;
  padding: 2em 1em;
  background-color: ${(props) => props.theme.dark100};
  border: 2px solid ${(props) => props.theme.dark300};
  border-radius: 15px;
  gap: 2em;
`;

export const DownloadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
`;

export const DownloadButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #28a745;
  width: max-content;
  padding: 0.9ch 1.5ch;
  border-radius: 1ch;
  font-weight: 800;
  text-transform: capitalize;
`;
