import styled from "styled-components";

export const Container = styled.button`
  background: var(--blue);
  border-radius: 8px;
  border: 0;
  color: var(--text-body);
  font-weight: 500;
  margin-top: 1rem;

  width: 100%;
  height: 3.5rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;