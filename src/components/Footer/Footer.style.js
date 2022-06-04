import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10em;
  min-height: 30vh;
  padding: 0.5em 5em;
  background-color: ${(props) => props.theme.dark100};
  border: 2px solid ${(props) => props.theme.dark300};
  border-radius: 15px;

  .links {
    flex-grow: 1;
  }
`;

export const WrapItem = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SocialsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1em 0 0 0;

  img {
    height: 1.5em;

    &:hover {
      filter: invert(0.6);
    }
  }
`;
