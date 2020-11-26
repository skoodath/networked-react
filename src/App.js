import React from 'react';
import Home from './components/home';
import About from './components/about';
import Footer from './components/footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalstyles';


const App = () => {
  
  return (
    <>
    <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
        </Switch>
      
      <Footer />
    </Router>
    <GlobalStyle />
    </>
  );
}

export default App;
