import React from 'react';
import { ThemeContext } from '../context/ThemeContext';


class ThemeToggle extends React.Component {

  static contextType= ThemeContext;

  render () {

  const { toggleTheme } = this.context;

  return (
    <div className="App">
        <button onClick={toggleTheme}>Let's toggle!</button> 
    </div>
    );
  }
}

export default ThemeToggle;
