import React, { Component, PureComponent } from 'react';
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
import ParentComponent from './components/ParentComponent';
import CounterTime from './components/CounterTime'
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './components/appStyles.css'
import styles from './components/appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import RegComp from './components/RegComp';
import ParentComp from './components/ParentComp';
import MemoComp from './components/MemoComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParent from './components/FRParent';
import PortalDemo from './PortalDemo';
<<<<<<< HEAD
=======
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
>>>>>>> commit again all files, new topic higher order component

class App extends Component {

  



  render() {
    return (
      <div className="App">
        
<<<<<<< HEAD
        <PortalDemo />


        {/*
=======
        <ClickCounter name='walk' />
        <HoverCounter />
        


        {/*
        <ErrorBoundary>
          <Hero heroName="batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="supermane" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="joker" />
        </ErrorBoundary>
        <PortalDemo />
>>>>>>> commit again all files, new topic higher order component
        <FRParent />
        <FocusInput />
        <RefsDemo />
        <ParentComp />
        <ParentComp />
        <FragmentDemo />

        <Table />
        <LifecycleA />
        <Form />
        <h1 className="error">Error</h1>
        <h1 className={styles.success}>success</h1>
        <Inline />
        
        <Stylesheets primary={true} />
        <NameList />
        <UserGreeting />
        <CounterTime />
        <ParentComponent />
        <EventBind />

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
