import React from 'react';
import logo from './logo.svg';
import { Container } from './components/styles/Container.styled';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global.styles';
import Login from './components/Login';
import Fetch from './components/Fetch';
const theme ={
  colors:{ 
    header:'#000000',
    body: '#fff',
    footer: '#003333',
},
mobile:'768px',

}
function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
      <Header />
      <Login />
      <Fetch/>
    </>
    </ThemeProvider>
    
  );
}

export default App;
