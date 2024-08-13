import React from 'react'

function MyEvents() {
  return (
    <div>
      MyEvents<br/><br/>
      <button onClick={() => {
        console.log("Single Click")
      }}>Click</button>
      <button onDoubleClick={() => {
        console.log("Double Click")
      }}>Double Click</button>
    </div>
  )
}

export default MyEvents;