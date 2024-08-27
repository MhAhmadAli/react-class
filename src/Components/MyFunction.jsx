import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MyFunction() {
  const [name, setName] = useState();
  const [count, setCount] = useState(0);

  function updateCounter() {
    setCount(count + 1);
  }

  async function fetchFunction() {
    let data = await fetch('http://localhost:4000/').then((data)=>{
      return data.text();
    });
    console.log(data);

    data = await axios.get('http://localhost:4000/');
    console.log(data.data);
  }

  useEffect(()=>{
    fetchFunction();
  }, []);

  return (
    <div>
      <div>My Function</div><br/>
      <input type="text" onChange={(e) => {
        setName(e.target.value)
      }} />
      <div>{count}</div>
      <button onClick={updateCounter}>Count</button>
    </div>
  )
}


