import { useState, useEffect } from 'react';

const useForm = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    username: '',
    password: '',
    reenteredpassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChanges = event => {
    const { name, value } = event.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  return { handleChanges }
}

export default useForm;