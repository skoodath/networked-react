import React from 'react';
import Home from './components/home';
import About from './components/about';
import Footer from './components/footer';
import GlobalStyle from './styles/globalstyles';
import Fellowship from './components/Home/fellowship';
import Seasons from './components/Home/seasons';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import LandingBackground from './components/Home/Landing/threebg';

ReactGA.initialize('UA-175890664-1');
ReactGA.pageview("/");

const App = () => {


  return (
    <>
      <Helmet>
        <title>networkED: A new way of thinking for children</title>
        <meta name="description" content="networkED: A new way of thinking for children" />
        <meta property="og:title" content="networkED: A new way of thinking for children" />
        <meta property="og:description" content="networkED: A new way of thinking for children" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.networked.in/" />
        <meta property="twitter:site" content="https://www.networked.in/" />
      </Helmet>
      <Home />
      <LandingBackground />
      <About />
      <Fellowship />
      <Seasons />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
