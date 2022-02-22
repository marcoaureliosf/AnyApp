import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #272936;
    --text-body: #FCFCFC;
    
    --blue: #187BD1;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  } 
     
  

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: #ffffff;
    color: #ffffff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;