import React, { useState } from 'react'
import './Authpage.css'
import Image from '../../components/Image/Image'

const Authpage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className='authPage'>
      <div className="authContainer">
        <Image path="/general/logo.png" alt="" h={36} w={36}/>
        <h1>{isRegister ? "Create an Account" : "Login to your account"}</h1>
        {isRegister ? (
          <form key="registerForm">
            <div className='formGroup'>
              <label htmlFor="username">Username</label>
              <input type='username'
                required name='username'
                id='username'
                placeholder='Username' />
            </div>
            <div className='formGroup'>
              <label htmlFor="username">Name</label>
              <input type='name'
                required name='name'
                id='name'
                placeholder='name' />
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
          <form key="loginForm" className='loginnForm'>
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