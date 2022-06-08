import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './components/HomePage'
import Accessibility from './components/Accessibility';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Accessibility />
      <Footer />                
    </Router>
  );
}

export default App;