import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Greeting from './Greeting/Greeting';
import Counter from './Counter/Counter';
import CounterClass from './Counter/CounterClass';

const App : React.FC = () =>{
  // const [first, setfirst] = useState(0) JS
  // const [first, setfirst] = useState<number>(0) TS


  const name = 'Ijlel'
  return (
    <div className="App">
    {/* <Home/> */}
    {/* <Greeting  name={name}/> */}
    {/* <Counter/> */}
    <CounterClass/>
      </div>
  );
}

export default App;
