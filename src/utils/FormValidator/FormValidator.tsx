import React, { useCallback } from "react";

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = React.useState({
    'name': '',
    'email': '',
    'searchInput': '',
  });
  const [errors, setErrors] = React.useState({
    'name': '',
    'email': '',
    'password': '',
  });
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event: { target: any }) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  function validateEmail(value: string) {
    if (!/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(value)) {
      return true;
    } else {
      return false;
    }
  }

  return { values, handleChange, errors, isValid, resetForm, setValues, validateEmail };
}