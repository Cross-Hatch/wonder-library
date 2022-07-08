import styled from 'styled-components';

export const Container = styled.div`
  width: 40vw;
  height: 20em;
  margin: 6vh auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 3px;
`;

export const Form = styled.form``;

export const Legend = styled.legend`
  font-size: 2em;
`;

export const Input = styled.input`
  background-color: transparent;
  border-radius: 50px;
  padding: 0.5em 1em;
  display: block;
  color: #fff;
  margin: 2em;
  :active {
    outline: 0.1em solid ${(props) => props.theme.red};
  }
`;

export const Button = styled.button`
  width: 6em;
  border-radius: 0.4em;
  background-color: red;
  color: #fff;
  margin-bottom: 1em;
  padding: 0.25em;
  cursor: pointer;
`;

export const Errortext = styled.div`
  color: red;
`;
