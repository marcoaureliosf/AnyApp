import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
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

  ${props =>
    props.isFocused &&
    css`
      color: var(--blue);
      border: ridge;
      border-color: var(--blue);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--blue);
    `}

  ${props =>
    props.isErrored &&
    css`
      border: solid;
      border-color: #c53030;
    `}

`;

export const ErrorContainer = styled.span`

  svg {
    margin-right: 0;
    margin-left: 1rem;
  }

`;