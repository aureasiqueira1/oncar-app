import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #fff;
  }

  body, input, button {
    font: 1rem Roboto, sans-serif;
  }

  button, a {
    cursor: pointer;
    transition: background-color 0.2s ease;
    border: none;
  }
`;
