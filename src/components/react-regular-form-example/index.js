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

    const handleChange = ({ target }) => {
        const { formValues } = formState;
        formValues[target.name] = target.value;
        setFormState({ formValues });
        handleValidation(target);
      };

    return (
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <h1 className="mt-5">React regular form</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${
                      formState.formErrors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Enter email"
                    onChange={handleChange}
                    value={formState.formValues.email}
                  />
                  <div className="invalid-feedback">
                    {formState.formErrors.email}
                  </div>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className={`form-control ${
                      formState.formErrors.password ? "is-invalid" : ""
                    }`}
                    placeholder="Password"
                    onChange={handleChange}
                    value={formState.formValues.password}
                  />
                  <div className="invalid-feedback">
                    {formState.formErrors.password}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      );