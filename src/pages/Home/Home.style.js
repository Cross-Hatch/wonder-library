import styled from 'styled-components';

export const CoverImg = styled.div`
  position: absolute;
  inset: 0 auto auto 0;
  width: 100vw;
  /* opacity: .2; */
  z-index: -10;

  &::before {
    content: '';
    position: absolute;
    inset: 0 auto auto 0;
    width: 100vw;
    height: 102%;
    background-image: linear-gradient(0deg, #000 40%, transparent 100%);
  }
`;

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
    height: 60vh;
  }
`;

export const LandingText = styled.div`
  max-width: 50ch;
  position: absolute;
  top: 7em;
  left: 3em;

  h1 {
    font-size: 4rem;
    line-height: 0.9em;
  }

  p {
    width: 40ch;
    margin: 1.5em 0 0 0;
  }

  a {
    margin: 2em 0 0 0;
    font-size: 1.3em;
  }
`;

export const PreText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:10em 0;

  h1 {
    font-size: 3rem;
    /* line-height: 0.9em; */
    text-align: center;
  }

  p {
    max-width: 60ch;
    margin-top: 2em;
    font-size:20pt;
  }
`;
export const Featured = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  h1 {
    font-size: 3rem;
    /* line-height: 0.9em; */
    text-align: center;
  }

  .featured-products {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 1.5em;

    @media screen and (max-width: 790px) {
      grid-template-columns: 1fr;
    }
  }
`;
