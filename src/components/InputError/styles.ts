import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  span {
    width: 11rem;
    background: #c53030;
    padding: 0.25rem;
    border-radius: 0.25rem 0.25rem 0 0.25rem;
    font-size: 1rem;
    position: absolute;
    bottom: calc(100% + 35px);
    left: 30%;
    transform: translateX(-90%);

    color: #FCFCFC;
    
    &::before {
      content: '';
      border-style: solid;
      border-color: #c53030 transparent;
      border-width: 12px 2px 0 5px;
      top: 97%;
      position: absolute;
      left: 90%;
      transform: translateX(115%);
    }
  }
`;