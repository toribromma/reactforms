import React from 'react';
import ReactBareBone from "./components/react-regular-form-example"
import FormikFunction from "./components/FormikForm";
import { Form } from 'formik';

function App() {

  const onSubmit = values => {
    // form is valid
    console.log(values);
  }

  return (
    <div>
      <ReactBareBone/>
      <FormikFunction/>

    </div>
  );
}

export default App;
