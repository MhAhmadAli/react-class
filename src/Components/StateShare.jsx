import React, { useState } from 'react'

function StateShare() {
  const [name, setName] = useState('');

  return (
    <div>
      <ComponentA value={name} setName={setName}/>
      <ComponentB value={name} setName={setName}/>
    </div>
  )
}

function ComponentA({value, setName}) {
  return (
    <div>Component A
      <br/>
      <input type="text" value={value} onChange={(e) => {
        setName(e.target.value);
      }} />
      <div>
        The value is {value}
      </div>
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
    </div>
  )
}


export default StateShare;