// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Routes from './components/Routes';
import Navigation from './components/Navigation';
import Home from './components/Home'
import About from './components/About'
import Project from './components/Projects/Project'
import Contact from './components/Contact';
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>  
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Project />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>

      </Switch>
   
      <Footer />


      <Routes />
      {/* route component will show something different based on where you are  */}
    </Router>
  );
}

export default App;
