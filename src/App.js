import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './counter/Counter';


function App() {
  const [buttonColor, setButtonColor] = useState('red')

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
  return (
    <div>
      <button style={{backgroundColor: buttonColor}} onClick={() => setButtonColor(newButtonColor)}>
        Change to {newButtonColor}
      </button>
      <Counter initial={0}></Counter>
    </div>
  );
}

export default App;
