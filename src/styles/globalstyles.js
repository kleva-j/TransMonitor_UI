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
    overflow-x: hidden;
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

  .neutral {
    color: #C4C4C4
  }

  select {
    font-size: 16px;
    font-family: sans-serif;
    color: #7F8FA4;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #DDE0E3;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin-right: 20px;
    cursor: pointer;
  }

`;

export const ContainerWrapper = styled.section`

  display: flex;
  justify-content: start;
  height: 100%

  .content_wrapper {
    flex-grow: 1;
  }
`;
