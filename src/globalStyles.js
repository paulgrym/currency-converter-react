import { createGlobalStyle } from "styled-components";
import background from "./background.jpg"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: "Lato", sans-serif;
    font-size: 17px;
    color: hsl(0, 0%, 15%);
    background-color: hsl(0, 3%, 45%);
    background-image: url("${background}");
    background-size: cover;
    background-position:center;
    background-blend-mode: overlay;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;