import styled from 'styled-components';

let duration = '1500ms';

export const Container = styled.div`
  /* position: relative; */
  display: grid;
  place-items: center;
  grid-template-rows: 1fr 15em;
  min-height: 100vh;

  .container__dot {
    display: flex;
    width: 15vw;
    justify-content: space-evenly;
  }

  .dot {
    background-color: #fff;
    width: 1em;
    aspect-ratio: 1;
    border-radius: 1em;
  }

  .first {
    animation: blink ${duration} ease-in-out infinite;
    animation-direction: alternate;
  }

  .second {
    animation: blink ${duration} ease-in-out 500ms infinite;
    animation-direction: alternate-reverse;
  }

  .third {
    animation: blink ${duration} ease-in-out 2500ms infinite;
    animation-direction: alternate-reverse;
  }

  @keyframes blink {
    100% {
      opacity: 0;
      transform: scale(0.5);
    }
  }
`;
