import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.5rem;
  }
  
  input {
    width: 100%;
    background: transparent;
    border: 0;
    color: ${props => props.theme.colors.text};

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