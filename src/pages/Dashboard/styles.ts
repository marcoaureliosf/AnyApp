import styled, { css } from "styled-components";

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 100vh;
  padding: 1rem;
  
  @media (min-width:1024px) {
    display: flex;
    justify-content: center;
    
    header {
      max-width: 1280px;
      width: 100%;
      height: 20rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      h1 {
        margin: 0;
        display: block;
        font-size: 2rem;
      }
      
      .menu-section {
        padding: 0;
        .menu-toggle {
          display: none;
        }

        nav {
          width: 100%;
          display: flex;
          ul {
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: space-evenly;
          }
        }
      }

      
    }
  }

  header {
    background: ${props => props.theme.colors.header};
    border-radius: 0 0 0.5rem 0.5rem;
    margin: -1rem;
    color: #FCFCFC;
  }
  
  h1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    width: 90%;
    max-width: 980px;
    
    margin: auto;
  }
  
  li {
    list-style: none;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #FCFCFC;
    text-transform: uppercase;
    font-size: 1.5rem; 
    border-radius: 0.25rem;
    padding: 0.5rem 0.5rem;
    line-height: 4rem;
    transition: all 250ms linear 0s;
    
    &:hover {
      background-color: rgba(255,255,255, 0.20)
    }
  }

  nav {
    display: none;
  }

  .one,
  .two,
  .three {
    background-color: #fff;
    height: 5px;
    width: 100%;
    margin: 6px auto;

    transition-duration: 0.3s;
  }

  .menu-section {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
  }
  
  .menu-toggle {
    width: 40px;
    height: 30px;
    margin-right: 20px;
  }

  /* fullscreen */
  ${props =>
    props.isOpen &&
    css`
        position: absolute;
        top:0;
        left:0;
        
        width: 100vw;
        height: 100vh;

        background: var(--blue);

        z-index: 10;
        overflow: hidden;

        display: flex;
        justify-content: center;
        align-items: center;

      header {
        background: transparent;
      }

      h1 {
        display: none;
      }
        
      nav {
        display: block;
      }
      
      .menu-toggle {
        position: absolute;
        right: 1rem;
        top: 1rem;
      }

      .menu-toggle .one {
        transform: rotate(45deg) translate(7px, 7px);
      }

      .menu-toggle .two {
        opacity: 0;
      }

      .menu-toggle .three {
        transform: rotate(-45deg) translate(8px, -9px);
      }
    `}

`; 
