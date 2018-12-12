import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './welcome';

import NameCard from './components/NameCard'

import LikesButton from './components/LikesButton'

const tags=['nice', 'beautiful'];

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
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
        </header> */}
        <Welcome />
        <NameCard name='jane' number = {21232323} isHuman = {true} tags={tags}/>
        <LikesButton />
      </div>
    );
  }
}

export default App;
