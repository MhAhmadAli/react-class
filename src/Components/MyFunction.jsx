import React, { useState, useEffect } from 'react';

export default function MyFunction() {
  const [name, setName] = useState();
  const [count, setCount] = useState(0);

  function updateCounter() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("useEffect")
  }, [name]);

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


