import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10em;
  min-height: 30vh;
  padding: 2em 5em;
  background-color: ${(props) => props.theme.dark100};
  border: 2px solid ${(props) => props.theme.dark300};
  border-radius: 15px;

  .links {
    flex-grow: 1;
    align-items: center;
    font-size: 1.5em;
    text-transform: capitalize;

    @media screen and (max-width: 768px) {
      flex-direction: row;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 0em;
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
