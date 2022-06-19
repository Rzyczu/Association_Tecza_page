import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from './components/HomePage'
import NewsPage from './components/NewsPage'

import NotFound from './components/404'

import Accessibility from './components/Accessibility';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';



function App() {
  const [fontSize, setFontSize] = useState(14);
  const [negative, setNegative] = useState(false);

  const colors = {
    primary: '#009641',
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
      case "negative": {
        setNegative(!negative)
      }
        break;
      case "restart": {
        setFontSize(14)
        setNegative(false)

      }
        break;

    }


  }
  return (

    <Router>
      <div style={{
        "--clr-light": negative ? colors.negativeClr : colors.light,
        "--clr-secondary": negative ? colors.negativeF : colors.secondary,
        "--clr-primary": negative ? colors.negativeF : colors.primary,
        "--clr-dark": negative ? colors.negativeF : colors.dark,

        color: negative ? colors.negativeF : colors.dark,
        backgroundColor: negative ? '#19191a' : '#ffffff',
        fontSize: `${fontSize}px`,

      }}>
        <Nav />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/aktualnosci" element={<NewsPage />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
        <Accessibility func={operation} />
        <Footer />
      </div>
    </Router >
  );
}

export default App;