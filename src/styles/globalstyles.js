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

  ul, p {
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

`;

export const ContainerWrapper = styled.section`

  display: flex;
  justify-content: start;

  .content_wrapper {
    flex-grow: 1;
  }
`;
