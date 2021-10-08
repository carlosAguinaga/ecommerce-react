import React, { useContext, useState } from "react";
import { Formik } from "formik";
import "./LoginForm.styles.css";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router";

// const auth = {
//   user: "Carlos",
//   email: "carlos@carlos.com",
//   password: "carlos",
// };

const LoginForm = () => {
  const { dispatch } = useContext(UserContext);

  const history = useHistory();

  // const [initialValues, setInitialValues] = useState({
  const [initialValues] = useState({
    email: "Daniel",
    password: "",
  });

  const handleFormValidate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post("http://localhost:1337/auth/local", {
        identifier: values.email,
        password: values.password,
      });

      if (response.data) {
        dispatch({ type: "SUCCESS", payload: response.data });
        history.push('/')
        console.log('paso el push');
      }
    } catch (error) {
      alert("identifire or data is invalid.");
    }
  };

  return (
    <div className="login-container">
      <Formik
        initialValues={initialValues}
        validate={handleFormValidate}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Login Form</h2>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
