'use strict';

import React from 'react'

function SignUpForm() {
  return (
    <div className="form-content">
      <form className="form">
        <h1>Create an account with us to help you keep track of all your projects!</h1>
        <h2>Please fill out the form below to your account created!</h2>
        <div className="form-input">
          <label htmlFor="username"> Username </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username here"
            />
        </div>
        <div className="form-input">
          <label htmlFor="email"> Email </label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email here"
            />
        </div>
        <div className="form-input">
        <label htmlFor="password"> Password </label>
          <input 
            type="password"
            name="password"
            placeholder="Create a password"
          />
        </div>
        <div className="form-input">
          <label htmlFor="password"> Confirm Password </label>
            <input 
              type="password"
              name="re-enter password"
              placeholder="Confirm password"
            />
        </div>
        <button className="form-submit">Create Account</button>
      </form>
    </div>
  )
}

export default SignUpForm
