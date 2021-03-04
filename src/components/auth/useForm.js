import { useState, useEffect } from 'react';

const useForm = () => {
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
  }

  return { handleChanges, formValues, handleSubmit }
}

export default useForm;