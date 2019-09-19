import React, { useState } from 'react';
import './App.css';

const App = ()=> {

  const [hello, setHello] = useState("World");
  const [count, setCount] = useState([]);

  const upChange = () =>{
    const e = count;
    const length = e.length;
    let newValue = length+1;
    (newValue%15===0)     ? newValue = "FizzBuzz"
      :  (newValue%3===0) ?   newValue = "Fizz"
      :  (newValue%5===0) ?  newValue = "Buzz"
      :  (newValue = length+1);

    const result = [...e, newValue];
    setCount(result);
    CountList(result);
  }

  const downChange = () =>{
    const e = count;
    const result = [...e].slice(0, e.length-1);
    setCount(result);
  }

  
  const CountList =(array)=>{
    let newList = count;
    const counting = newList.map((x, index)=>(
      <li
        value={x}
        key={index}
        className="bulletPoint"
      >
        >{x}
      </li>
    ));

    return(
    <div className='countList'>
      FizzBuzz List: 
        {counting}
     </div>
    );
  }

  return (
    <div className="App">
      Hello {hello}
    <input
      value={hello}
      onChange={(e=>setHello(e.currentTarget.value))}
    />
    <section className="buttonSection">  
      <button
        className="button"
        onClick={upChange}
      >
        +
      </button>
      <button
        className="button"
        onClick={downChange}
      >
        -
      </button>
    </section>
    <section className="answers">
      <CountList array={count}/>
    </section>
    
   
    </div>
  );
}

//FizzBuzz multiples of 3 print Fizz and multiple of 5 print Buzz
// 1 = 1 2 = 2 3 = Fizz 4 = 4 5 = Buzz 6 = Fizz ....

export default App;
