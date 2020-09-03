import React from 'react';
import {render} from 'react-dom';
import logo from './logo.svg';
import './App.css';
import MyCalendar from './components/Calendar'

function App() {
  return (
    <div>
      <MyCalendar />

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </div>
  );
}

export default App;
