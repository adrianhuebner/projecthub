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
  else if(formValues.password.length < 6){
    errors.password = "Password must be at least 6 characters long"
  }
  else if(formValues.password.length > 20){
    errors.password = "Password can be at most 20 characters long"
  }

  if(!formValues.secondpassword){
    errors.secondpassword = "Please re-enter your password"
  }
  else if(formValues.secondpassword !== formValues.password){
    errors.secondpassword = "Passwords do not match"
  }

  return errors;
}