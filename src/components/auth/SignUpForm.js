'use strict';

import React from 'react';
import useForm from './useForm';
import validation from './validateUserInput';

function SignUpForm() {

  const {handleChanges, handleSubmit, formValues, errors} = useForm(validation);

  return (
    <div className="form-content">
      <form onSubmit={handleSubmit} className="form">
        <h1>Create an account with us to help you keep track of all your projects!</h1>
        <h2>Please fill out the form below to your account created!</h2>
        <div className="form-input">
          <label htmlFor="username"> Username </label>  
            <input
              type="text"
              name="username"
              placeholder="Enter your username here"
              value={formValues.username}
              onChange={handleChanges}  
            />
            {errors.username && <p> {errors.username} </p>}
        </div>
        <div className="form-input">
          <label htmlFor="email"> Email </label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email here"
              value={formValues.email}
              onChange={handleChanges}
            />
        </div>
        <div className="form-input">
        <label htmlFor="password"> Password </label>
          <input 
            type="password"
            name="password"
            placeholder="Create a password"
            value={formValues.password}
            onChange={handleChanges}
          />
        </div>
        <div className="form-input">
          <label htmlFor="password"> Confirm Password </label>
            <input 
              type="password"
              name="re-enter password"
              placeholder="Confirm password"
              value={formValues.secondpassword}
              onChange={handleChanges}
            />
        </div>
        <button className="form-submit" type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default SignUpForm
