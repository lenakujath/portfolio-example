import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <Navbar/>
        <div className="App-header">
          <Header/>
        </div>  
        <ThemeToggle/>
        <div className='About'>
          <About/>
        </div>
        <div className='work'>
          <Work/>
        </div>
        <div className='contact'>
          <Contact/>
        </div>
        </ThemeContextProvider>
    </div>
  );
}

export default App;
