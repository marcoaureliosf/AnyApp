import styled from "styled-components";

export const Container = styled.div`
  background: #313543;
  border-radius: 8px;
  width: 100%;
  padding: 1rem;
  color: var(--text-body);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.5rem;
  }
  
  input {
    width: 100%;
    background: transparent;
    border: 0;
    color: var(--text-body);

    & + input {
      margin-top: 0.5rem;
    }

  }

  svg {
    margin-right: 1rem;
  }

 
`;