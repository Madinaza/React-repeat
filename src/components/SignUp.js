import React from "react";
import { Formik } from "formik";
import {} from "./style.css";
import Validation from "./Validation";

function SignUp() {
  return (
    <div className="signUp">
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Validation}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(console.log(values));
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              autoComplete="off"
              onBlur={handleBlur}
            />

            {errors.email && touched.email && (
              <div className="error">{errors.email}</div>
            )}



<label htmlFor="password">ConfirmPassword:</label>
            <input
              type="confirm"
              name="password"
              onChange={handleChange}
              autoComplete="off"
              onBlur={handleBlur}
            />
                {errors.password && touched.password && (
              <div className="error">{errors.password}</div>
            )}



            <label htmlFor="confirmPassword">Password:</label>
            <input
              type="confirmPassword"
              name="confirmPassword"
              onChange={handleChange}
              autoComplete="off"
              onBlur={handleBlur}
            />

            {errors.confirmPassword && touched.confirmPassword && (
              <div className="error">{errors.confirmPassword}</div>
            )}
            <br />
            <br />

            <button type="submit">Submit</button>
            <br />
            <br />

            {JSON.stringify(values)}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
