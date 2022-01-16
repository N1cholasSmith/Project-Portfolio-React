import logo from './logo.svg';
import './App.css';
import Routes from './components/Routes';
import Navigation from './components/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes />
      {/* route component will show something different based on where you are  */}
    </Router>
  );
}

export default App;
