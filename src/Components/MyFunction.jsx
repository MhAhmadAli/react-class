import React, { useState, useEffect } from 'react';

export default function MyFunction() {
  const [name, setName] = useState();
  const [count, setCount] = useState(0);

  function updateCounter() {
    setCount(count + 1);
  }

  let serverData = async () => {
    const data = await fetch('http://127.0.0.1:4000/');
    console.log(await data.text())
  };

  useEffect(()=>{
    serverData();
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


