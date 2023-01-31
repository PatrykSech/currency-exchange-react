import { createGlobalStyle } from "styled-components";
import background from "./images/graph1.jpeg"

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::after, ::before {
    box-sizing: inherit;
  }
  
  #root {
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: center;
    background-image: url("${background}");
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
  }
  
  body {
    margin: 0;
  }
`;