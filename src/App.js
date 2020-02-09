import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greate from './components/greate'
import Welcome from './components/welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greate />
        <Welcome />
      </div>
    );
  }
}

export default App;
