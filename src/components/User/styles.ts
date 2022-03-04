import styled from "styled-components";

export const Container = styled.div`
  background: ${props => props.theme.colors.user};
  border: solid 2px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3rem;

  &:hover {
    border-color: #FF9000;
    cursor: pointer;
  }

  h2, p {
    display: flex;
    align-items: center;
    margin: 0.5rem;
  }
  
  svg {
    margin-right: 0.5rem;
  }
`;