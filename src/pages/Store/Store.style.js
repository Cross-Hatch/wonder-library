import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;

  display: grid;
  grid-template: auto / repeat(3 ,1fr);
  place-items: center;
  gap:3em 1em;
  padding: 3em ;
`;
