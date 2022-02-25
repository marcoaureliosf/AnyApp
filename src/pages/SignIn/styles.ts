import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background);
  color: var(--text-body);
  
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;

    span {
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
  }

  form {
    margin: 4rem 0;
    width: 300px;
    text-align: center;

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }

`;

export const RedirectSignUp = styled(Link)`
  text-decoration: none;
  
  div {
    display: flex;
    align-items: center;
    color: var(--text-body);

    &:hover {
      color: var(--blue);
    }
  }
`;