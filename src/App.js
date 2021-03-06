import React from 'react';
import { GlobalStyle } from './styles/globalstyles';
import { IconContext } from 'react-icons';
import { Header } from './components/layout/Header';
import { Container } from './components/MainContent';

export const App = () => {
  const defaultIconStyles = {
    style: {
      fontSize: '20px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      color: '#414042'
    }
  }

  return (
    <div>
      <GlobalStyle />
      <IconContext.Provider value={defaultIconStyles}>
        <Header />
        <Container />
      </IconContext.Provider>
    </div>
  );
}
