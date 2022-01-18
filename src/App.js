
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home'
import About from './components/AboutMe'
import Services from './components/Services'
import ProjectCarousel from './components/Projects/Index'
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
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/projects">
          <ProjectCarousel />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
