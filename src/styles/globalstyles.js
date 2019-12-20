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
    background: #F7F8FA;
    font-family: Arial, Helvetica, sans-serif;
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 16px;
  }

  ul, p, h1, h2, h3, h4, h5, h6{
    margin: 0;
    padding: 0;
  }

  ul {
    list-style-type: none;
  }

  input:focus {
    outline: none;
  }

  input[type="search"]::placeholder {
    color: #333
  }

  .flex {
    display: flex;
  }

  .yellow {
    color: #EBC315;
  }

  .green {
    color: #27AE60;
  }

  .blue {
    color: #1860EC;
  }

`;

export const ContainerWrapper = styled.section`

  display: flex;
  justify-content: start;

  .content_wrapper {
    flex-grow: 1;
  }
`;
