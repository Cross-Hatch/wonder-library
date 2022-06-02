import styled from 'styled-components';

export const Container = styled.li`
  list-style: none;
  margin-inline: .3em;
  
  .active-link {
    border-bottom: 2px solid ${(props) => props.theme.red};
  }

  .inactive-link {
    color: ${(props) => props.theme.dark300};
  }
`;
