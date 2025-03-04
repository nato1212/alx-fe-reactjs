import React from "react";
import RegistrationForm from "./components/RegistrationForm"; // For controlled components version
// import FormikForm from './components/FormikForm'; // Uncomment if using Formik-based version

function App() {
  return (
    <div className="App">
      <h1>User Registration</h1>
      {/* Render the form component */}
      {/* Choose one of the two forms below depending on the version you want to use */}

      {/* Using controlled components */}
      <RegistrationForm />

      {/* Using Formik-based form */}
      {/* <FormikForm /> */}
    </div>
  );
}

export default App;
