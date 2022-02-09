import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ButtonIncrement from './ButtonIncrement';
import ButtonDecrement from './ButtonDecrement';

// function App() {
const App = () => {
  // useState(bisaMasukApaAja)
  const [number, setNumber] = useState(0)

  // harus di declar type dari variablenya, misal const
  const setVal = (val) => {
    setNumber(val)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <button onClick={decrement}>+</button> */}
      {/* {number} */}
      {/* <button onClick={increment}>+</button> */}
      <ButtonDecrement number={number} callback={setVal} />
      <ButtonIncrement number={number} callback={setVal} />
    </div>
  );
}

export default App;
