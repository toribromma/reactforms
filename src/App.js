import React from 'react';
import ReactBareBone from "./components/react-regular-form-example"
import FormikFunction from "./components/FormikForm";
import ReactHookForm from "./components/ReactHookForm"

function App() {

  const onSubmit = values => {
    // form is valid
    console.log(values);
  }

  return (
    <div>
      <ReactBareBone/>
      <FormikFunction/>
      <ReactHookForm/>

    </div>
  );
}

export default App;
