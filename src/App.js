import React from 'react';
import Home from './components/home';
import About from './components/about';
import Footer from './components/footer';
import GlobalStyle from './styles/globalstyles';
import Fellowship from './components/Home/fellowship';
import Seasons from './components/Home/seasons';

const App = () => {


  return (
    <>
      <Home />
      <About />
      <Fellowship />
      <Seasons />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
