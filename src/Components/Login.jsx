import React, { useState } from 'react';
import './Login.css';
import Avatar from '../Assets/avatar.png'
import axios from 'axios';
import request from '../Utils';

function Login() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const data1 = {
      email,
      pass
    }

    request('/login',{
      method: 'POST',
      data: data1
    }).then((data) => {
      console.log(data);
      setIsLoading(false);
    }).catch((err) => {
      console.log(err);
      setIsLoading(false);
    });

    // axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, data).then((res) => {
    //   console.log(res.data);
    //   setIsLoading(false);
    // }).catch((err) => {
    //   console.log("Error:", err.response.data);
    //   setIsLoading(false);
    // });

    // fetch('http://localhost:4000/login', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    //   },
    //   body: JSON.stringify(data)
    // });
  }

  return (
    <div className='outer-container'>
      <form onSubmit={handleSubmit}>
        <div className="imgcontainer">
          <img src={Avatar} alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required onChange={(e) => {
            setEmail(e.target.value);
          }} />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required onChange={(e) => {
            setPass(e.target.value);
          }} />

          <button type="submit" disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</button>
        </div>
      </form>
    </div>
  )
};

export default Login