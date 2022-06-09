import React, { useState } from 'react';
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
  const [fontSize, setFontSize] = React.useState(14);
  const operation = (data) => {
    // alert(data)
    switch (data) {
      case "upperFontSize": {
        if (fontSize == 20) {
          setFontSize(20)
        } else
          setFontSize(fontSize + 1)
      }
        break;
      case "downerFontSize": {
        if (fontSize == 9) {
          setFontSize(9)
        } else
          setFontSize(fontSize - 1)
      }
        break;
      case "restart": {
        setFontSize(14)
      }



    }

  }
  return (

    <Router>
      <div style={{
        fontSize: `${fontSize}px`
      }}>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Accessibility func={operation} />
        <Footer />
      </div>
    </Router >
  );
}

export default App;