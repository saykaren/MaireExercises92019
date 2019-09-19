import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = ()=> {

  const [hello, setHello] = useState("World");
  const [count, setCount] = useState([0, 2, 3]);

  const upChange = (e) =>{
    e = {count};
    
    console.log(e);
  }

  const CountList =()=>{
    return(
      <div>
      {count.map(e=>(
        <li
        value={e}
        key={count[e]}
        >
        {e}
        </li>
      ))}
    </div>
    )
  }

  return (
    <div className="App">
      Hello {hello}
      <CountList/>
    <input
      value={hello}
      onChange={(e=>setHello(e.currentTarget.value))}
    />
    <button
      className="button"
      onClick={upChange()}
    >
      +
    </button>
    <button>
      -
    </button>
    </div>
  );
}

//FizzBuzz multiples of 3 print Fizz and multiple of 5 print Buzz
// 1 = 1 2 = 2 3 = Fizz 4 = 4 5 = Buzz 6 = Fizz ....

export default App;
