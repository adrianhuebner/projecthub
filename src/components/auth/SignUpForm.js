'use strict';

import React from 'react'

function SignUpForm() {
  return (
    <div className="form-content">
      <form className="form">
        <h1>Create an account with us to help you keep track of all your projects!</h1>
        <h2>Please fill out the form below to your account created!</h2>
        <div className="form-input">
          <label htmlFor="username">
            <input
              type="text"
              name="username"
              placeholder="Enter your username here"
            />
          </label>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
