import { useState } from "react";
const axios = require("axios");

const useForm = (schema) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState("");

  const handleSubmit = (event) => {
    //event.preventDefault();
    const { error } = validate();
    if (!error) {
      axios.post("/offers/", inputs).then(function (response) {
        console.log(response);
      });
    } else {
      console.log(error);
      setErrors(error);
    }
  };

  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const validate = () => {
    return schema.validate(inputs);
  };

  return { handleSubmit, handleInputChange, errors };
};

export default useForm;
