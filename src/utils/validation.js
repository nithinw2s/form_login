// src/utils/validation.js

const validateForm = (formdata) => {
    const errors = {};
  
    if (!formdata.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      errors.email = "Email address is invalid";
    }
  
    if (!formdata.password) {
      errors.password = "Password is required";
    } else if (formdata.password[0].length < 6) {
        console.log(formdata.password)
        errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };
  
  export default validateForm;
  