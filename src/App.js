import React from 'react';
import ReactBareBone from "./components/react-regular-form-example"
import {Form, Formik, Field, ErrorMessage} from "formik"
function App() {

  const onSubmit = values => {
    // form is valid
    console.log(values);
  }

  return (
    <div>
      <ReactBareBone/>

      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={onSubmit}
      >


      </Formik>
      
    </div>
  );
}

export default App;
