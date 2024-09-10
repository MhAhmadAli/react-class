import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [confirmPass, setConfirmPass] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if(pass !== confirmPass) {
      alert('Passwords don\'t match');
      return;
    }

    const data = {
      email,
      pass
    };

    // axios.post('http://localhost:5000/signup', data);

    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
  }

  return (
    <div className='outer-container'>
      <span className='title-name'>Sign Up</span>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required onChange={(e) => {
            setEmail(e.target.value);
          }} />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required onChange={(e) => {
            setPass(e.target.value);
          }} />

          <label htmlFor="psw"><b>Confirm Password</b></label>
          <input type="password" placeholder="Confirm Password" name="psw" required onChange={(e) => {
            setConfirmPass(e.target.value);
          }} />

          <button type="submit">SignUp</button>
        </div>
      </form>
    </div>
  )
}

export default Signup