import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from './components/HomePage'
import NotFound from './components/404'

import Accessibility from './components/Accessibility';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';



function App() {
  const [fontSize, setFontSize] = React.useState(14);
  const [color, setColor] = React.useState(false);

  const colors = {
    primary: '#f5f3ec',
    secondary: '#e36217',
    dark: '#001b39',
    light: '#f5f3ec',
    negativeClr: 'black',
    negativeF: 'yellow'
  }

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
        break;
      case "negative": {
        setColor(!color)
      }
        break;


    }


  }
  return (

    <Router>
      <div style={{
        "--clr-light": color ? colors.negativeClr : colors.light,
        "--clr-secondary": color ? colors.negativeF : colors.secondary,
        "--clr-primary": color ? colors.negativeF : colors.primary,
        "--clr-dark": color ? colors.negativeF : colors.dark,

        color: color ? colors.negativeF : colors.dark,
        backgroundColor: color ? '#19191a' : '#ffffff',
        fontSize: `${fontSize}px`,

      }}>
        <Nav />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        <Accessibility func={operation} />
        <Footer />
      </div>
    </Router >
  );
}

export default App;