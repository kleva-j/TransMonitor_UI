import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }

  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    color: #414042;
    background: #E5E5E5;
    font-family: Arial, Helvetica, sans-serif;
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 16px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  input:focus {
    outline: none;
  }

  input[type="search"]::placeholder {
    color: #333
  }

`;

export const ContainerWrapper = styled.section`
  .container {
    margin: 0 auto;
    display: flex;
    justify-content: start;
  }

  .container > div {
    flex-grow: 1;
  }
`;