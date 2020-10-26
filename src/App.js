import React from 'react';
import Navbar from './components/hamburger';
import MenuPage from './components/menu';
import Home from './components/home';
import About from './components/about';
import NetScience from './components/netscience';
import Footer from './components/footer';
import { MyMenuAction } from './context/context';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './styles/globalstyles';

const App = () => {
  
  return (
    <>
    <Router>
      <MyMenuAction>
        <Navbar />
        <MenuPage />
      </MyMenuAction>
      <Route path="/" component={Home} exact />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/what-is-network-science" component={NetScience} />
        <Route path="/blog" component={()=>window.location('http://blog.networked.in')} />
      </Switch>
      <Footer />
    </Router>
    <GlobalStyle />
    </>
  );
}

export default App;
