import logo from './logo.svg';
import './App.css';
import React from 'react';
import Benefits from './components/benefits/benefits';
import BigTransfer from './components/bigtransfer/bigtransfer.jsx'
import Processes from './components/processes/processes'
import Personal from './components/personal/personal';
import About from './components/about/about'

function App() {
  return (
    <React.Fragment>
      <BigTransfer />
      <Processes />
      <Benefits />
      <Personal />
      <About />
    </React.Fragment>
  );
}

export default App;
