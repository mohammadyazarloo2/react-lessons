import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greate from './components/greate'
import Welcome from './components/welcome'
import Hello from './components/hello'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greate /> */}
        {/* <Welcome /> */}
        <Hello />
      </div>
    );
  }
}

export default App;
