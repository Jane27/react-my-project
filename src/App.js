import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './welcome';

import NameCard from './components/NameCard'

import LikesButton from './components/LikesButton'

import DigitalClock from './components/DigitalClock';

const tags=['nice', 'beautiful'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showClock: true
    }
  }
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
        <LikesButton/>
        {this.state.showClock && <DigitalClock />}
        <button className="btn btn-primary" onClick={()=>{this.setState({showClock: !this.state.showClock})}}>{this.state.showClock ? "Hide Clock": "Show Clock"}</button>
      </div>
    );
  }
}

export default App;
