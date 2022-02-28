import styled from 'styled-components';

import signUpBackgroundImg from '../../assets/signUpBackground.jpg'

export const Container = styled.div`
  height: 100vh;
  transition: all 1s;
  display: flex;
  align-items: stretch;

  @media (min-width: 1024px) {
    main {
      width: 40%;
    }
  }

`;

export const Content = styled.main`
  width: 100%;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  .anyapp {
      color: #FF9000;
      animation: neon 3s alternate infinite ease-in-out;

      @keyframes neon {
        from {
          filter: drop-shadow(0 0 0 #FF9000);
        }
        to {
          filter: drop-shadow(0 0 30px #FF9000);
        }
      }
    }

  form {
    margin: 4rem 0;
    width: 300px;
    text-align: center;

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;

      animation: neon-2 2s alternate infinite ease-in-out;

      @keyframes neon-2 {
        from {
          filter: drop-shadow(0 0 0 var(--blue));
        }
        to {
          filter: drop-shadow(0 0 3px var(--blue));
        }
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.text};

    &:hover {
      color: var(--blue);
    }
  }
`;

export const Background = styled.div`
  order: -1;
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const Gradient = styled.div`
  background: rgba(0,0,0,0.2);
  background-image: linear-gradient(to top, rgba(0,0,0,0.4) 0, rgba(0,0,0,0) 20%,rgba(0,0,0,0) 80%, rgba(0,0,0,0.4) 100%);
  position: absolute;
  
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;