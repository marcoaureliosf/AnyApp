import styled, { css } from "styled-components";

interface ContainerProps {
  onOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--background);
  height: 100vh;
  padding: 1rem;

  header {
    background: black;
    padding: 2rem;
    margin: -1rem;
  }
  
  header .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

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
    color: var(--textbody);
    text-transform: uppercase;
    font-size: 2rem; 
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
  }
  
  .menu-toggle {
    width: 40px;
    height: 30px;
    margin-right: 20px;
  }

  /* fullscreen */
  ${props =>
    props.onOpen &&
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

      header .container {
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
