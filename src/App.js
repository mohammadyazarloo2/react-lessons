import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greate from './components/greate'
import Welcome from './components/welcome'
import Hello from './components/hello'
import Message from './components/message'
import Counter from './components/counter';
import FunctionClick from './components/functionClick';
import ClassClick from './components/classClick'
import EventBind from './components/EventBind';

class App extends Component {




  render() {
    return (
      <div className="App">

        <EventBind />
        


        {/*
        <ClassClick />
        <FunctionClick />
        <Greate name="bruce" heroName="batman" >
        <Counter />
        <p>this is cildren prop</p>
        </Greate>
        <Greate name="diana" heroName="wonder women" >
        <button>Action</button>
    </Greate>
        <Greate name="petter" heroName="mit php" />
        <Welcome name="bruce" heroName="batman" />
        {/*<Welcome name="clark" heroName="superman" />
        <Welcome name="diana" heroName="wonder women" />
        <Hello /> */}
      </div>
    );
  }
}

export default App;
