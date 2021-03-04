import { useState, useEffect } from 'react';

const useForm = validation => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    secondpassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChanges = event => {
    const { name, value } = event.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validation(formValues));
  }

  return { handleChanges, formValues, handleSubmit, errors }
}

export default useForm;