import React, { useState } from 'react';
import './Login.css';
import Avatar from '../Assets/avatar.png'

function Login() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      email,
      pass
    }

    fetch('http://localhost:4000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(data)
    });
  }

  return (
    <div className='outer-container'>
      <form onSubmit={handleSubmit}>
        <div className="imgcontainer">
          <img src={Avatar} alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label htmlFor="email"><b>Username</b></label>
          <input type="text" placeholder="Enter Email" name="email" required onChange={(e) => {
            setEmail(e.target.value);
          }} />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required onChange={(e) => {
            setPass(e.target.value);
          }} />

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
};

export default Login