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
        <Greate name="bruce" heroName="batman" >
        <p>this is cildren prop</p>
        </Greate>
        <Greate name="diana" heroName="wonder women" >
        <button>Action</button>
        </Greate>
        <Greate name="petter" heroName="mit php" />
        <Welcome name="bruce" heroName="batman" />
        <Welcome name="clark" heroName="superman" />
        <Welcome name="diana" heroName="wonder women" />
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
