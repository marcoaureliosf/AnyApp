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