import React, { useState } from 'react'
import './Authpage.css'
import Image from '../../components/Image/Image'
import apiRequest from '../../utils/apiRequest.js'
import { useNavigate } from "react-router";
import useAuthStore from '../../utils/authStore.js';


const Authpage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const{setCurrentUser} = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)

    const data = Object.fromEntries(formData);
    
    try {
      const response = await apiRequest.post(`/users/auth/${isRegister ? "register" : "login"}`, data);
      
      // After suceesfull login thenn redirect the user to the home page
      setCurrentUser(response.data);
      navigate("/");
     } catch (error) {
      setError(error.response.data.message);
    }
  }

  return (
    <div className='authPage'>
      <div className="authContainer">
        <Image path="/general/logo.png" alt="" h={36} w={36} />
        <h1>{isRegister ? "Create an Account" : "Login to your account"}</h1>
        {isRegister ? (
          <form key="registerForm" onSubmit={handleSubmit}>
            <div className='formGroup'>
              <label htmlFor="username">Username</label>
              <input type='text'
                required name='username'
                id='username'
                placeholder='Username' />
            </div>
            <div className='formGroup'>
              <label htmlFor="displayName">Name</label>
              <input type='text'
                required name='displayName'
                id='displayName'
                placeholder='Name ' />
            </div>
            <div className='formGroup'>
              <label htmlFor="email">Email</label>
              <input type='email'
                required name='email'
                id='email'
                placeholder='Email' />
            </div>
            <div className='formGroup'>
              <label htmlFor="password">Password</label>
              <input type='password'
                required name='password'
                id='password'
                placeholder='Password' />
            </div>
            <button type='submit'>Register</button>
            <p onClick={() => setIsRegister(false)}>Do you have an Accounnt <b>Login</b></p>
            {error && <p className='error'>{error}</p>}
          </form>) : (
          <form key="loginForm" className='loginnForm' onSubmit={handleSubmit}>
            <div className='formGroup'>
              <label htmlFor="email">Email</label>
              <input type='email'
                required name='email'
                id='email'
                placeholder='Email' />
            </div>
            <div className='formGroup'>
              <label htmlFor="password">Password</label>
              <input type='password'
                required name='password'
                id='password'
                placeholder='Password' />
            </div>
            <button type='submit'>Login</button>
            <p onClick={() => setIsRegister(true)}>Don't have an Account? <b>Register</b></p>
            {error && <p className='error'>{error}</p>}
          </form>)}
      </div>
    </div>
  )
}

export default Authpage