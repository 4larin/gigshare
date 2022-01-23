import './App.css';
import React from 'react';
import Benefits from './components/benefits/benefits';
import BigTransfer from './components/bigtransfer/bigtransfer.jsx'
import Processes from './components/processes/processes'
import Personal from './components/personal/personal';
import About from './components/about/about'
import { useState, useEffect } from 'react'



function App() {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(offsetY)
  return (

    <React.Fragment>
      <BigTransfer y={setOffsetY} />
      <Processes y={setOffsetY} />
      <Benefits y={setOffsetY} />
      <Personal y={setOffsetY} />
      <About y={setOffsetY} />
    </React.Fragment>
  );
}

export default App;
