'use strict';

export default function validateFormErrors(formValues){

  let errors = {};
  
  // Username Errors
  if(!formValues.username.trim()){
    errors.username = "Please enter an username"
  }

  // Email Errors
  let emailRegex = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"

  if(!formValues.email){
    errors.email = "Please enter an email"
  }

  else if(!emailRegex){
    errors.email = "Please enter a valid email address"
  }

  // Password Errors
  if(!formValues.password){
    errors.password = "Please enter a password"
  }
}