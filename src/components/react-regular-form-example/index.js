import React, { useState } from "react";

export default () => {
    const [formState, setFormState] = useState({
      formValues: {
        email: "",
        password: ""
      },
      formErrors: {
        email: "",
        password: ""
      },
      formValidity: {
        email: false,
        password: false
      }
    });