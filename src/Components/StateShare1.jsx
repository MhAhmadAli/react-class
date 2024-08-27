import React, { useState } from 'react'

function StateShare1() {
  const [name, setName] = useState('');

  return (
    <div>
      <ComponentA value={name} setName={setName}/>
    </div>
  )
}

function ComponentA({value, setName}) {
  return (
    <div>
      Component A
      <br/>
      <ComponentB value={value} setName={setName} />
    </div>
  )
}

function ComponentB(props) {
  return (
    <div>
      Component B
      <br/>
      <input type="text" onChange={(e) => {
        props.setName(e.target.value)
      }}/>
      <br />
      The value is {props.value}
    </div>
  )
}

export default StateShare1;