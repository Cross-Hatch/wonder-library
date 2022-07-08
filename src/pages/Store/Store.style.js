import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  height: 100vh;

  &.featured-section, &.pretext-section {
    margin: 5em 0 9em 0;

    @media screen and (max-width: 790px) {
      height: max-content;
    }
  }

  @media screen and (max-width: 768px) {
    height: 50vh;
  }
`;
export const Featured = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 81%;

  h1 {
    font-size: 3rem;
    /* line-height: 1em; */
    text-align: center;
  }

  .featured-products {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    gap: 1em;

    @media screen and (max-width: 790px) {
      grid-template-columns: 1fr;
    }
  }`
  ;